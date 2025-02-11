// import React, { useRef, useEffect } from 'react';
// import flv from 'flv.js';

// const VideoPlayer = ({ streamKey }) => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     if (flv.isSupported()) {
//       const player = flv.createPlayer({
//         type: 'flv',
//         url: `http://localhost:8000/live/${streamKey}.flv`,
//       });
//       player.attachMediaElement(videoRef.current);
//       player.load();
//     }
//   }, [streamKey]);

//   return <video ref={videoRef} controls />;
// };

// export default VideoPlayer;



import React, { useRef, useEffect, useState } from "react";
import flv from "flv.js";

const VideoPlayer = ({ streamKey }) => {
  const videoRef = useRef(null);
  const [resolution, setResolution] = useState("Starting soon...");
  const [isBehind, setIsBehind] = useState(false);
  let player = null;

  useEffect(() => {
    if (flv.isSupported()) {
      player = flv.createPlayer({
        type: "flv",
        url: `http://localhost:8000/live/${streamKey}.flv`,
        isLive: true,
      });

      player.attachMediaElement(videoRef.current);
      player.load();
      player.play().catch((err) => console.error("Playback error:", err));

      // Set resolution once video metadata is loaded
      videoRef.current.addEventListener("loadedmetadata", () => {
        setResolution(`${videoRef.current.videoWidth}x${videoRef.current.videoHeight}`);
      });

      // Check if the user is behind live
      const checkLiveStatus = () => {
        if (videoRef.current.seekable.length > 0) {
          const liveEdge = videoRef.current.seekable.end(0);
          setIsBehind(videoRef.current.currentTime < liveEdge - 3);
        }
      };
      videoRef.current.addEventListener("timeupdate", checkLiveStatus);
    }

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, [streamKey]);

  // Jump to the latest live position
  const jumpToLive = () => {
    console.log("Jump to live triggered");
    if (videoRef.current && videoRef.current.seekable.length > 0) {
      const liveEdge = videoRef.current.seekable.end(0);
      console.log("Live edge:", liveEdge);
      videoRef.current.currentTime = liveEdge;
    } else {
      console.log("Video ref or seekable range not available");
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


