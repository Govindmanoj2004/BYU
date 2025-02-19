const NodeMediaServer = require("node-media-server");
const express = require("express");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const { createServer } = require("http");

const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());
app.use(express.json());

// Directory to save recorded HLS streams
const RECORD_DIR = path.join(__dirname, "hls_recordings");
if (!fs.existsSync(RECORD_DIR)) {
  fs.mkdirSync(RECORD_DIR, { recursive: true });
}

// Node Media Server Configuration (HLS enabled)
const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
  },
  http: {
    port: 8000,
    allow_origin: "*",
  },
  trans: {
    ffmpeg: "C:\ffmpeg\bin\ffmpeg.exeg", // Adjust this path if needed
    tasks: [
      {
        app: "live",
        ac: "aac",
        vc: "libx264",
        hls: true, // ✅ Make sure HLS is enabled
        hlsFlags: "[hls_time=2:hls_list_size=4:hls_flags=delete_segments]",
      },
    ],
  },
};

const nms = new NodeMediaServer(config);
nms.run();

// Store active recordings
const activeRecordings = {};

// Function to start recording in HLS format
const startRecording = (streamKey) => {
  const streamPath = path.join(RECORD_DIR, streamKey);
  if (!fs.existsSync(streamPath)) {
    fs.mkdirSync(streamPath, { recursive: true });
  }
  
  const filePath = path.join(streamPath, "index.m3u8");

  const ffmpeg = spawn("ffmpeg", [
    "-i",
    `rtmp://localhost/live/${streamKey}`, // RTMP Stream URL
    "-c:v",
    "libx264",
    "-preset",
    "ultrafast",
    "-c:a",
    "aac",
    "-b:a",
    "128k",
    "-strict",
    "experimental",
    "-f",
    "hls",
    "-hls_time",
    "2",
    "-hls_list_size",
    "4",
    "-hls_flags",
    "delete_segments",
    filePath,
  ]);

  activeRecordings[streamKey] = ffmpeg;

  ffmpeg.stderr.on("data", (data) => {
    console.error(`FFmpeg error: ${data}`);
  });

  ffmpeg.on("close", (code) => {
    console.log(`FFmpeg process exited with code ${code}`);
    delete activeRecordings[streamKey];
  });

  return filePath;
};

// API to start recording
app.post("/api/start-recording", (req, res) => {
  const { streamKey } = req.body;
  if (!streamKey) {
    return res.status(400).json({ error: "Stream key is required" });
  }
  if (activeRecordings[streamKey]) {
    return res.json({ message: "Recording is already in progress" });
  }
  const filePath = startRecording(streamKey);
  res.json({ message: "Recording started", filePath });
});

// API to stop recording
app.post("/api/stop-recording", (req, res) => {
  const { streamKey } = req.body;
  if (!streamKey || !activeRecordings[streamKey]) {
    return res.status(400).json({ error: "Invalid stream key or not recording" });
  }
  activeRecordings[streamKey].kill("SIGINT");
  res.json({ message: "Recording stopped" });
});

// API to list recorded HLS videos
app.get("/api/videos", (req, res) => {
  fs.readdir(RECORD_DIR, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Failed to retrieve videos" });
    }
    res.json({ videos: files });
  });
});

// Start HTTP server
const httpServer = createServer(app);
httpServer.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
