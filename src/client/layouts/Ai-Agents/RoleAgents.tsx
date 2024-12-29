import React from "react";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import SettingsIcon from "@mui/icons-material/Settings";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SecurityIcon from "@mui/icons-material/Security";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LockIcon from "@mui/icons-material/Lock";
import { RocketLaunch } from "@mui/icons-material";

interface RoleAgentsProps {
  setPage: (newPage: string) => void; // Control navigation
}
  const RoleAgents: React.FC<RoleAgentsProps> = ({ setPage }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleExploreClick = () => setPage("explore");

  return (
    <Box sx={{minHeight: "100vh", padding: isMobile ? "10px" : "20px" }}>
    {/* Role Agents Header */}
    <Box
     sx={{
     display: "flex",
     alignItems: "center",
     justifyContent: isMobile ? "center" : "flex-start",
        }}
         >
     <RocketLaunch
     fontSize={isMobile ? "medium" : "large"} // Adjust size for mobile and desktop
     style={{ marginRight: "5px",marginLeft:isMobile?"0":"15px",marginBottom:isMobile?"30px":"0", color: "#44A0FF" }}
        />
      <Typography
        variant={isMobile ? "h5" : "h4"}
        align={isMobile ? "center" : "left"}
        sx={{ fontSize: isMobile ? "1.5rem" : "2rem" }}
      >
        Launch Your AI Agents In <span style={{ color: "#44A0FF" }}>3 Steps</span>
      </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          gap: "10px",
          marginBottom: "20px",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleExploreClick}
          sx={{
            fontSize: isMobile ? "0.8rem" : "1rem",
            "&:hover": { backgroundColor: "#FF00CD" },
          }}
        >
          Task Agents
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setPage("roleAgents")}
          sx={{
            fontSize: isMobile ? "0.8rem" : "1rem",
            "&:hover": { backgroundColor: "#FF00CD" },
          }}
        >
          Role Agents
        </Button>
      </Box>

      <Box
      sx={{
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: "10px",
      justifyContent: "space-around",
      alignItems: "center",
      textAlign: "center",
      marginBottom: "30px",
       }}
       >
    {[
    {
      title: "Configure",
      description: "Set up the AI agents with LLM's low-code framework in minutes.",
      icon: <SettingsIcon sx={{ fontSize: "3rem", color: "#44A0FF" }} />,
    },
    {
      title: "Deploy",
      description: "Download configurations and deploy on your cloud.",
      icon: <CloudUploadIcon sx={{ fontSize: "3rem", color: "#44A0FF" }} />,
    },
    {
      title: "Manage",
      description: "Monitor AI agents via the LLM dashboard in real time.",
      icon: <DashboardIcon sx={{ fontSize: "3rem", color: "#44A0FF" }} />,
    },
     ].map((step, index) => (
      <motion.div
       key={index}
       whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)" }}
       whileTap={{ scale: 0.95 }}
       style={{
       background: "white",
       borderRadius: "10px",
       padding: "20px",
       boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
       marginBottom: isMobile ? "15px" : "0",
       display: "flex",
       flexDirection: "column",
       alignItems: "center",
              }}
       >
      {step.icon}
      <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: "10px" }}>
        {step.title}
      </Typography>
      <Typography variant="body2" sx={{ marginTop: "5px" }}>
        {step.description}
      </Typography>
      </motion.div>
      ))}
      </Box>
      {/* Integration Section */}
      <Typography
        variant={isMobile ? "h6" : "h5"}
        align="center"
        sx={{ margin: "20px 0", fontSize: isMobile ? "1rem" : "1.5rem"}}
      >
        Integrate With Leading <span style={{ color: "#44A0FF" }}>LLMs And Vector</span> Databases
      </Typography>
      <Box sx={{ textAlign: "center", marginBottom: "30px" }}>
        <Button variant="contained" sx={{ backgroundColor: "primary", "&:hover": { backgroundColor: "#FF00CD" } }}>
          Book A Demo
        </Button>
      </Box>

      {/* Features Section */}
      <Typography
      variant={isMobile ? "h6" : "h5"}
      align="center"
      sx={{ marginBottom: "20px" }}
      >
     L L M Makes It Easier<span style={{ color: "#44A0FF" }}> For Enterprises</span> To Adopt AI
     </Typography>
     <Box
     sx={{
     display: "grid",
     gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
     gap: "10px",
     textAlign: "center",
        }}
       >
     {[
     {
      title: "Enterprise AI Safety",
      description: "LLM's AI complies with ISO 42001 standards.",
      icon: <SecurityIcon sx={{ fontSize: "3rem", color: "#44A0FF" }} />,
    },
    {
      title: "White Glove Onboarding",
      description: "Get expert assistance during deployment.",
      icon: <HandshakeIcon sx={{ fontSize: "3rem", color: "#44A0FF" }} />,
    },
    {
      title: "AI Management System",
      description: "Monitor and manage your agents easily.",
      icon: <ManageAccountsIcon sx={{ fontSize: "3rem", color: "#44A0FF" }} />,
    },
    {
      title: "24/7 Enterprise Support",
      description: "Round-the-clock phone and email support.",
      icon: <SupportAgentIcon sx={{ fontSize: "3rem", color: "#44A0FF" }} />,
    },
    {
      title: "Data Privacy",
      description: "Run AI agents locally or on your cloud securely.",
      icon: <LockIcon sx={{ fontSize: "3rem", color: "#44A0FF" }} />,
    },
  ].map((feature, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)" }}
      whileTap={{ scale: 0.95 }}
      style={{
        background: "white",
        borderRadius: "10px",
        padding: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {feature.icon}
      <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: "10px" }}>
        {feature.title}
      </Typography>
      <Typography variant="body2" sx={{ marginTop: "5px" }}>
        {feature.description}
      </Typography>
      </motion.div>
      ))}
      </Box>
      {/* Back Button */}
      <Box sx={{ textAlign: "center", marginTop: "30px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setPage("main")}
          sx={{ "&:hover": { backgroundColor: "#FF00CD" } }}
        >
          Back to Main
        </Button>
      </Box>
    </Box>
  );
}

export default RoleAgents;


