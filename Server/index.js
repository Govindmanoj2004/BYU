const NodeMediaServer = require("node-media-server");
const express = require("express");
const { spawn } = require("child_process"); // Import child_process for FFmpeg
const fs = require("fs");
const path = require("path");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const port = 3000; // API server port
const cors = require("cors");
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Directory to save recorded videos
const RECORD_DIR = path.join(__dirname, "recordings");
if (!fs.existsSync(RECORD_DIR)) {
  fs.mkdirSync(RECORD_DIR, { recursive: true });
}

// Node Media Server Configuration
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
    ffmpeg: "/usr/bin/ffmpeg", // Adjust path if necessary
    tasks: [
      {
        app: "live", // This should match the RTMP application name
        ac: "aac",
        vc: "libx264",
        hls: true,
        hlsFlags: "[hls_time=2:hls_list_size=4:hls_flags=delete_segments]",
        dash: true,
        dashFlags: "[f=dash:window_size=5:extra_window_size=5]",
      },
    ],
  },
};

const nms = new NodeMediaServer(config);
nms.run();

// Store active recordings
const activeRecordings = {};

// Function to start recording a stream
const startRecording = (streamKey) => {
  const filePath = path.join(RECORD_DIR, `${streamKey}-${Date.now()}.mp4`);
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
    "mp4",
    filePath,
  ]);

  activeRecordings[streamKey] = ffmpeg;

  ffmpeg.stderr.on("data", (data) => {
    console.error(`FFmpeg error: ${data}`);
  });

  ffmpeg.on("close", (code) => {
    console.log(`FFmpeg process exited with code ${code}`);
    delete activeRecordings[streamKey]; // Remove from active recordings
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
    return res
      .status(400)
      .json({ error: "Invalid stream key or not recording" });
  }
  activeRecordings[streamKey].kill("SIGINT"); // Stop FFmpeg process
  res.json({ message: "Recording stopped" });
});

// API to list recorded videos
app.get("/api/videos", (req, res) => {
  fs.readdir(RECORD_DIR, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Failed to retrieve videos" });
    }
    res.json({ videos: files });
  });
});

//Chat socket.io

// Create HTTP server and attach Socket.IO
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

// Start HTTP server
httpServer.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});

io.on("connection", (socket) => {
  socket.on("hello", () => {
    console.log('hello');
    
    socket.emit("hai");
  });
});
