import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, Typography, Box } from "@mui/material";

const Wifi = () => {
  const [ping, setPing] = useState(null);
  const [color, setColor] = useState("#4CAF50"); // Default Green

  const arcs = [
    { radius: 15, delay: 0 },
    { radius: 30, delay: 0.2 },
    { radius: 45, delay: 0.4 },
    { radius: 60, delay: 0.6 },
    { radius: 75, delay: 0.8 },
  ];

  const measurePing = async () => {
    const url = "https://www.google.com"; // Fast server
    const start = performance.now();
    try {
      await fetch(url, { mode: "no-cors" }); // No need for response
    } catch (error) {
      console.log("Ping request error (ignored due to no-cors mode)");
    }
    const end = performance.now();
    const latency = Math.round(end - start);

    setPing(latency + " ms");

    if (latency < 50) {
      setColor("#4CAF50");
    } else if (latency >= 50 && latency < 150) {
      setColor("#FFC107");
    } else if (latency >= 150 && latency < 300) {
      setColor("#FF9800");
    } else {
      setColor("#F44336"); 
    }
  };
  // Update every 5s
  useEffect(() => {
    measurePing();
    const interval = setInterval(measurePing, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <Card
      sx={{
        width: "320px",
        height: "340px",
        borderRadius: 4,
        boxShadow:
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        textAlign: "center",
        padding: 2,
        bgcolor: "#ffff",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight="bold" color={color} gutterBottom>
          Ping: {ping || "Measuring..."}
        </Typography>
        <Box display="flex" justifyContent="center" mt={1} flexDirection="column" alignItems="center" padding="10px">
          <svg viewBox="0 0 100 100" width="200" height="150">
            <circle cx="50" cy="85" r="5" fill={color} />
            {arcs.map(({ radius, delay }, index) => {
              const angle = (40 * Math.PI) / 180;
              const x1 = 50 - radius * Math.cos(angle);
              const y1 = 85 - radius * Math.sin(angle);
              const x2 = 50 + radius * Math.cos(angle);
              const y2 = 85 - radius * Math.sin(angle);

              return (
                <motion.path
                  key={index}
                  d={`M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`}
                  fill="transparent"
                  stroke={color}
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: [1, 0],
                    scale: [1, 1.1],
                  }}
                  transition={{
                    duration: 0.7,
                    repeat: Infinity,
                    repeatDelay: 1,
                    delay,
                    ease: "easeOut",
                  }}
                />
              );
            })}
          </svg>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Wifi;
