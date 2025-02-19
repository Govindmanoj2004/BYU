import React from "react";
import { Card, CardContent, Typography, Button, Box, Chip } from "@mui/material";
import { Info } from "@mui/icons-material";
import { motion } from "framer-motion";
import Chart from "../Components/Charts/LineChart"; // Ensure this path is correct
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const data = [
  { time: "10:00", viewers: 50 },
  { time: "10:15", viewers: 75 },
  { time: "10:30", viewers: 120 },
  { time: "10:45", viewers: 200 },
  { time: "11:00", viewers: 250 },
];

const Mystream = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const tags = ["Gaming", "Live", "Esports"];

  const cardStyles = {
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
  };

  return (
    <div
      style={{
        height: "100vh",
        padding: "24px",
        backgroundColor: "#f5f5f5",
        width: "100%",
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        gap: "24px",
      }}
    >
      {/* Left Section: Video Player & Stream Details */}
      <div
        style={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* Video Player */}
        <Card sx={{ ...cardStyles, height: isSmallScreen ? "200px" : "200px", width: "60%" }}>
          <CardContent style={{ height: "100%", padding: 0 }}>
            <motion.div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/YOUR_LIVE_STREAM_ID"
                title="YouTube Live Stream"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onError={(e) => {
                  e.target.style.display = "none";
                  alert("Failed to load the live stream. Please check the stream ID.");
                }}
              ></iframe>
            </motion.div>
          </CardContent>
        </Card>

        {/* Stream Details & Chart Container */}
        <div
          style={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
            gap: "24px",
          }}
        >
          {/* Stream Details */}
          <Card sx={{ ...cardStyles, flex: 1 }}>
            <CardContent style={{ padding: "16px" }}>
              <Typography variant="h5" gutterBottom style={{ fontWeight: 600, color: "#333" }}>
                Live Stream Title
              </Typography>
              <Typography variant="body2" color="textSecondary" style={{ marginBottom: "16px" }}>
                This is a description of the live stream. Keep it concise and informative.
              </Typography>
              <Box display="flex" gap={1} flexWrap="wrap" style={{ marginBottom: "16px" }}>
                {tags.map((tag, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.05 }}>
                    <Chip
                      label={tag}
                      variant="outlined"
                      style={{ borderRadius: "8px", borderColor: "#ddd", color: "#666" }}
                    />
                  </motion.div>
                ))}
              </Box>
              <Box display="flex" gap={1}>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<Info />}
                  style={{ borderRadius: "8px", textTransform: "none" }}
                  aria-label="Stream Details"
                >
                  Stream Details
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* Viewers Chart */}
          <Card sx={{ ...cardStyles, flex: 1 }}>
            <CardContent style={{ padding: "16px" }}>
              <Typography variant="h6" gutterBottom style={{ fontWeight: 600, color: "#333" }}>
                Viewers Over Time
              </Typography>
              <Chart data={data} />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Section: Live Chat */}
      <Card sx={{ ...cardStyles, flex: 1, padding: "16px", display: "flex", flexDirection: "column" }}>
        <Typography variant="h6" gutterBottom>
          Live Chat
        </Typography>
        <div
          style={{
            flex: 1,
            height: "400px",
            overflowY: "auto",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "8px",
          }}
        >
          <Typography variant="body2">User1: Hello!</Typography>
          <Typography variant="body2">User2: How's the stream?</Typography>
        </div>
        <Box mt={2}>
          <input
            type="text"
            placeholder="Type a message..."
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "8px",
              border: "1px solid #ddd",
            }}
          />
        </Box>
      </Card>
    </div>
  );
};

export default Mystream;
