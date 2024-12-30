import React, { useState } from "react";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import PaperPlaneIcon from "@mui/icons-material/Send";
import SettingsIcon from "@mui/icons-material/Settings";
import EditIcon from "@mui/icons-material/Edit";
import MouseIcon from "@mui/icons-material/Mouse";
import ExploreAgents from "./ExploreAgents";
import RoleAgents from "./RoleAgents";

const AiAgents: React.FC = () => {
  const [page, setPage] = useState("main");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleExploreClick = () => setPage("explore");

  if (page === "explore") return <ExploreAgents setPage={setPage} />;
  if (page === "roleAgents") return <RoleAgents setPage={setPage} />;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        textAlign: "center",
        backgroundColor: "#ecf3fb",
        position: "relative",
        overflow: "hidden",
        padding: isMobile ? "0" : "10px",
      }}
    >
      {/* Nested Circles with Rotating Effect */}
      <Box
        sx={{
          position: "relative",
          width: isMobile ? "250px" : "600px",  
          height: isMobile ? "250px" : "600px",  
          "@keyframes rotateClockwise": {
            "0%": {
              transform: "rotate(0deg)",
            },
            "100%": {
              transform: "rotate(360deg)",
            },
          },
          "@keyframes rotateCounterClockwise": {
            "0%": {
              transform: "rotate(0deg)",
            },
            "100%": {
              transform: "rotate(-360deg)",
            },
          },
        }}
      >
        {/* Outer, Middle, and Inner Circles with Rotating Animations */}
        <motion.div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: "4px dashed #44A0FF",
            animation: "rotateClockwise 20s linear infinite", // Clockwise rotation
          }}
        />
        <motion.div
          style={{
            position: "absolute",
            width: "80%",
            height: "80%",
            borderRadius: "50%",
            border: "4px dashed #83c1ff",
            top: "10%",
            left: "10%",
            animation: "rotateCounterClockwise 20s linear infinite", // Counterclockwise rotation
          }}
        />
        <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  whileHover={{
    scale: 1.05,
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
  }}
  style={{
    position: "absolute",
    width: "60%",
    height: "60%",
    borderRadius: "50%",
    backgroundColor: "white",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    top: "20%",
    left: "20%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: isMobile ? "10px" : "30px",
  }}
>
  <Typography
    variant="h4"
    sx={{
      marginTop: isMobile ? "20px" : "50px",  
      fontWeight: "bold",
      fontSize: isMobile ? "0.7rem" : "1.5rem",
      marginBottom: isMobile ? "0" : "10px",
      textAlign: "center",
    }}
  >
    Build AI Agents <span style={{ color: "#44A0FF" }}>90% Faster</span> With{" "}
    <span style={{ color: "#44A0FF" }}>L L M</span> The Full-Stack Agent Framework
  </Typography>
  <Typography
    variant="body2"
    sx={{
      marginBottom: isMobile ? "5px" : "20px",
      fontSize: isMobile ? "0.4rem" : "1rem",
      textAlign: "center",
    }}
  >
    The Enterprise Alternative To Langchain
  </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleExploreClick}
            sx={{
              borderRadius: "20px",
              "&:hover": { backgroundColor: "#FF00CD" },
              fontSize: isMobile ? "0.4rem" : "1rem",
              padding: isMobile ? "3px 5px" : "10px 20px",
            }}
          >
            Explore AI Agents →
          </Button>
        </motion.div>
      </Box>

      {/* Floating Icons */}
      {[
        { top: isMobile ? "25%" : "30%", left: isMobile ? "5%" : "20%", icon: <PaperPlaneIcon /> },
        { bottom: isMobile ? "25%" : "35%", left: isMobile ? "5%" : "20%", icon: <SettingsIcon /> },
        { top: isMobile ? "25%" : "30%", right: isMobile ? "5%" : "20%", icon: <EditIcon /> },
        { bottom: isMobile ? "25%" : "35%", right: isMobile ? "5%" : "20%", icon: <MouseIcon /> },
      ].map((floatIcon, index) => (
        <motion.div
          key={index}
          style={{
            position: "absolute",
            width: isMobile ? "30px" : "50px",  
            height: isMobile ? "30px" : "50px",  
            backgroundColor: "#2196F3",
            borderRadius: "50%",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: isMobile ? "18px" : "24px",  
            ...floatIcon,
          }}
          animate={{ y: [0, -10, 0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {floatIcon.icon}
        </motion.div>
      ))}
    </Box>
  );
};

export default AiAgents;



















 











