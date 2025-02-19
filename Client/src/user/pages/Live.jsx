import React, { useRef, useEffect, useState } from "react";
import Hls from "hls.js";

const VideoPlayer = ({ streamKey }) => {
  const videoRef = useRef(null);
  const [resolution, setResolution] = useState("Loading...");
  const [isBehind, setIsBehind] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const streamURL = `http://localhost:8000/live/${streamKey}/index.m3u8`;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(streamURL);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((err) => console.error("Playback error:", err));
      });
      hls.on(Hls.Events.LEVEL_SWITCHED, (_, data) => {
        const level = hls.levels[data.level];
        if (level && level.width && level.height) {
          setResolution(`${level.width}x${level.height}`);
        }
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = streamURL;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch((err) => console.error("Playback error:", err));
        setResolution(`${video.videoWidth}x${video.videoHeight}`);
      });
    }

    const checkLiveStatus = () => {
      if (video.seekable.length > 0) {
        const liveEdge = video.seekable.end(0);
        setIsBehind(video.currentTime < liveEdge - 3);
      }
    };

    video.addEventListener("timeupdate", checkLiveStatus);

    return () => {
      video.removeEventListener("timeupdate", checkLiveStatus);
    };
  }, [streamKey]);

  const jumpToLive = () => {
    if (videoRef.current && videoRef.current.seekable.length > 0) {
      const liveEdge = videoRef.current.seekable.end(0);
      videoRef.current.currentTime = liveEdge;
    }
  };

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "800px" }}>
      {/* LIVE Badge (Clickable) */}
      <span
        onClick={() => isBehind && jumpToLive()}
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          background: isBehind ? "orange" : "red",
          color: "white",
          padding: "5px 10px",
          fontWeight: "bold",
          borderRadius: "5px",
          cursor: isBehind ? "pointer" : "default",
        }}
      >
        {isBehind ? "GO LIVE" : "LIVE"}
      </span>

      {/* Video Player */}
      <video ref={videoRef} controls autoPlay style={{ width: "100%", borderRadius: "5px" }} />

      {/* Resolution Display */}
      <span
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          background: "black",
          color: "white",
          padding: "5px 10px",
          fontWeight: "bold",
          borderRadius: "5px",
        }}
      >
        {resolution}
      </span>
    </div>
  );
};

export default VideoPlayer;
