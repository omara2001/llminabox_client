import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import DefaultIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import ChooseAssistantIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { motion } from "framer-motion";
import logo from "../../assets/images/Created AI Assistants.png";
import DefaultAiAssistant from "./Default Ai Assistant";
import CreatedAiAssistant from "./Created Ai Assistant";

const CreateAiAssistant = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.6 },
    }),
  };
  
  const [page, setPage] = useState("main");
  const handleDefaultAiAssistantClick = () => setPage("DefaultAiAssistant");
  const handleCreatedAiAssistantClick = () => setPage("CreatedAiAssistant");
  if (page === "DefaultAiAssistant") return <DefaultAiAssistant setPage={setPage} />;
  if (page === "CreatedAiAssistant") return <CreatedAiAssistant setPage={setPage} />;
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff", // Clean white background
        textAlign: "center",
        padding: "5px",
      }}
    >
      {/* Title */}
      <Box
       sx={{display: "flex",alignItems: "center",  mb:2, }}
            >
      <img
          src={logo as string}
          alt="AI Assistants Logo"
          style={{
            width: "40px",
            height: "40px",
            marginRight: "10px", // Add spacing between logo and text
            
          }}
        />
      <Typography
        variant="h4"
        fontWeight="bold"
        color="#3b3b3b" // Dark text for contrast
        
      >
        Steps to create AI Assistant
      </Typography>
      </Box>
      {/* Steps */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          maxWidth: "900px",
        }}
      >
        {["Name your AI Assistant", "Customize AI features", "Generate code snippet and embed"].map(
          (text, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <motion.div
                custom={index}
                variants={stepVariants}
                initial="hidden"
                animate="visible"
              >
                <Box
                  sx={{
                    borderRadius: "10px",
                    textAlign: "center",
                    backgroundColor: "white",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Typography
                    variant="h2"
                    fontWeight="bold"
                    color="#ffa500" // Bright yellow-orange for the number
                  >
                    {index + 1}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#3b3b3b" // Dark text for contrast
                    padding="13px"
                  >
                    {text}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          )
        )}
      </Grid>

      {/* CTA Section */}
      <Typography
        variant="h4"
        fontWeight="bold"
        color="#3b3b3b" // Dark text for contrast
        gutterBottom
        sx={{ marginTop: "20px" }}
      >
        Already have an AI Assistant?
      </Typography>

      <Grid container spacing={5} justifyContent="center">
        {/* Default Ai Assistant Option */}
        <Grid item xs={12} sm={8} md={6} lg={5}>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Box
              sx={{
                border: "2px solid #0085EF",
                borderRadius: "25px",
                p: 8,
                textAlign: "center",
                cursor: "pointer",
                backgroundColor: "#f9f9f9",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
              }}
              onClick={handleDefaultAiAssistantClick}
            >
              <DefaultIcon
                sx={{
                  width: 40,
                  height: 40,
                  margin: "0 auto",
                  color: "#0085EF",
                }}
              />
              <Typography variant="h6" color="#0085EF" fontWeight="bold">
               Default Ai Assistant
              </Typography>
              <Typography color="textSecondary">
                You can choose one From Our Default Ai Assistant
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      
      {/* choose your Own Created Ai Assistant Option */}
      <Grid item xs={12} sm={8} md={6} lg={5}>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Box
              sx={{
                border: "2px solid #0085EF",
                borderRadius: "25px",
                p: 8,
                textAlign: "center",
                cursor: "pointer",
                backgroundColor: "#f9f9f9",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
              }}
              onClick={handleCreatedAiAssistantClick}
            >
              <ChooseAssistantIcon
                sx={{
                  width: 40,
                  height: 40,
                  margin: "0 auto",
                  color: "#0085EF",
                }}
              />
              <Typography variant="h6" color="#0085EF" fontWeight="bold">
              Your Created Ai Assistant
              </Typography>
              <Typography color="textSecondary">
                You can Use Your Own Created Ai Assistant
              </Typography>
            </Box>
          </motion.div>
        </Grid>
        </Grid>  
      {/* Footer */}
      <Box sx={{ marginTop: "40px" }}>
        <Typography
          variant="body1"
          color="#6c757d" // Muted text for the footer
        >
          If you need any further help, get support from{" "}
          <Typography
            component="span"
            sx={{
              color: "#ff1493", // Bright pink for the chatbot link
              fontWeight: "bold",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            chatbot
          </Typography>{" "}
          on the website.
        </Typography>
      </Box>
    </Box>
  );
};
export default CreateAiAssistant;






