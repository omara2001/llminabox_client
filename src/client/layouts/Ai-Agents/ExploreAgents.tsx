import React from "react";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { EmojiObjects } from "@mui/icons-material";
import logo from "@/client/assets/images/llminaboxlogo2.gif";

interface ExploreAgentsProps {
  setPage: (newPage: string) => void; // Control navigation
}
  const ExploreAgents: React.FC<ExploreAgentsProps> = ({ setPage }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleExploreClick = () => setPage("explore");
  return (
    <Box sx={{ minHeight: "100vh", padding: isMobile ? "10px" : "20px" }}>
      {/* Header Section */}
      <Box
       sx={{
       display: "flex",
       alignItems: "center",
       justifyContent: isMobile ? "center" : "flex-start",
          }}
       >
    <EmojiObjects
      fontSize={isMobile ? "medium" : "large"} // Adjust size for mobile and desktop
      style={{ marginRight: "5px",marginLeft:isMobile?"0":"15px", color: "#44A0FF" }}
    />
      <Typography
        variant={isMobile ? "h5" : "h4"}
        align={isMobile ? "center" : "left"}
        
        sx={{ fontSize: isMobile ? "1.5rem" : "2rem" }}
      >
        Explore <span style={{ color: "#44A0FF" }}>AI</span> Agents
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
      {/* AI Agent Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "15px",
          padding: isMobile ? "0 10px" : "0 20px",
        }}
      >
        {[
          { title: "Chatbots", icon: "🤖" },
          { title: "Knowledge Search", icon: "🌐" },
          { title: "RAG", icon: "📄" },
          { title: "Summarizer", icon: "✍️" },
          { title: "Content Generator", icon: "📜" },
          { title: "Voice Agents", icon: "🎙️" },
          { title: "Data Analysis", icon: "📊" },
          { title: "Text-To-SQL", icon: "📑" },
          { title: "Question Answering", icon: "❓" },
          { title: "Jason The AI SDR", icon: "🤵" },
        ].map((agent, index) => (
          <motion.div
            key={index}
            style={{
              padding: "15px",
              background: "white",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Typography variant="h4" sx={{ fontSize: isMobile ? "2rem" : "3rem" }}>
              {agent.icon}
            </Typography>
            <Typography variant="h6" sx={{ fontSize: isMobile ? "0.9rem" : "1rem" }}>
              {agent.title}
            </Typography>
          </motion.div>
        ))}
      </Box>
      
      {/* Architecture Section */}
      <Box sx={{ marginTop: "30px", textAlign: "center", position: "relative" }}>
        {/* Left GIF */}
       <Box
       component="img"
       src={logo as string}
       alt="Architecture Animation Left"
       sx={{
           position: "absolute",
           left: isMobile? "10px":"100px", 
           top: "50%",
           transform: "translateY(-50%)",
           width: isMobile ? "50px":"100px", 
           }}
         />
        <Typography variant="h6" gutterBottom sx={{ fontSize: isMobile ? "1rem" : "1.2rem" }}>
          Powered by <span style={{ color: "#44A0FF" }}>#1 Agent Architecture</span> in the Industry
        </Typography>
        <Box
          sx={{
            margin: "10px 0",
            textAlign: "center",
            maxWidth: "600px",
            marginX: "auto",
            fontSize: isMobile ? "0.8rem" : "1rem",
          }}
          > 
          {[
            "RLHF: Reinforced Learning Human Feedback",
            "RLAF: Reinforced Learning AI Feedback",
            "Self Reflection",
            "Toxicity Controller",
            "Meta Prompt Optimizer",
            "Custom Data with RAG",
            "Human-In-Loop Review",
            "Short Term Memory",
            "Long Term Memory",
            "Human Instructions",
          ].map((feature, index) => (
            <Typography key={index} variant="body2" sx={{ marginBottom: "5px" }}>
              • {feature}
            </Typography>
          ))}
        </Box>
        {/* Right GIF */}
        <Box
        component="img"
        src={logo as string}
        alt="Architecture Animation Right"
        sx={{
        position: "absolute",
        right: isMobile? "10px":"100px", 
        top: "50%",
        transform: "translateY(-50%)",
        width: isMobile ? "50px":"100px",
        }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => setPage("main")}
          sx={{ fontSize: isMobile ? "0.8rem" : "1rem" , "&:hover": { backgroundColor: "#FF00CD" }}}
        >
          Back to Main →
        </Button>
    </Box>
      {/* Footer Section */}
      <Box sx={{ marginTop: "30px", textAlign: "center" }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontSize: isMobile ? "1rem" : "1.2rem" }}
        >
          Enterprises and Startups Building on L L M ⎻ IN A BOX ⎻
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "15px",
            maxWidth: "600px",
            margin: "auto",
          }}
        >
          {["SurePeople", "Trilogy", "VantagePoint", "Deloitte", "MERCK", "Nelson Global"].map(
            (logo, index) => (
              <Box
                key={index}
                sx={{
                  padding: "7px",
                  fontSize: "1rem",
                  backgroundColor: "#e8eaf6",
                  borderRadius: "10px",
                }}
              >
                {logo}
              </Box>
            )
          )}
        </Box>
      </Box>
    </Box>
  );
}


export default ExploreAgents;
