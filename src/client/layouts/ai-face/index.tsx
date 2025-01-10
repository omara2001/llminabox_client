import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import AutoModeOutlinedIcon from '@mui/icons-material/AutoModeOutlined';
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';

// Import your custom avatars
import Avatar1 from '@/client/assets/images/Avatar1.png';
import Avatar2 from '@/client/assets/images/Avatar2.png';
import Avatar3 from '@/client/assets/images/Avatar3.png';
import Avatar4 from '@/client/assets/images/Avatar4.png';
import { motion } from "framer-motion";

const AIFace = () => {
  const [screen, setScreen] = useState("main"); // Track current screen
  const [description, setDescription] = useState({
    gender: "",
    age: "",
    ethnicity: "",
    appearance: "",
  });
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [selectedAvatar, setSelectedAvatar] = useState<{ type: 'custom' | 'uploaded'; index: number } | null>(null);
  // Example array of your custom avatars
  const customAvatars = [Avatar1,Avatar2,Avatar3,Avatar4,];

  // Handlers for navigation
  const handleScreenChange = (newScreen: string) => setScreen(newScreen);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription({ ...description, [e.target.name]: e.target.value });
  };

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setUploadedImages((prevImages) => [...prevImages, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };  
  const handleAvatarSelect = (type: 'custom' | 'uploaded', index: number) => {
    setSelectedAvatar((prev) =>
      prev?.type === type && prev?.index === index ? null : { type, index }
    );
  };
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  
  const subheaderVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
  };
  const renderMainScreen = () => (
    <Box textAlign="left">
    {/* Animate Main Header */}
    <motion.div
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <Typography variant="h4" fontWeight="bold" fontFamily="Merriweather Sans" mb={2} ml={2}>
        Create Your Assistant’s Face
      </Typography>
    </motion.div>
    {/* Animate Subheader */}
    <motion.div
      initial="hidden"
      animate="visible"
      variants={subheaderVariants}
    >
      <Typography mb={4} ml={2}>
        You can upload photos or generate your assistant’s appearance
      </Typography>
    </motion.div>
      <Grid container spacing={3} justifyContent="left">
        {/* Upload Option */}
        <Grid item xs={12} sm={8} md={6} lg={4}>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Box
            sx={{
              border: "2px solid #0085EF",
              borderRadius: "8px",
              p: 8,
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => handleScreenChange("upload")}
          >
            <CloudUploadOutlinedIcon
              sx={{ width: 60, height: 60, margin: "0 auto", color:"#0085EF"}}
            />
            <Typography variant="h6" color="#0085EF">
              UPLOAD
            </Typography>
            <Typography>Upload photos from your files or drive</Typography>
          </Box>
          </motion.div>
        </Grid>
        {/* Generate Option */}
         <Grid item xs={12} sm={8} md={6} lg={4}>
           <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            >
         <Box
            sx={{
              border: "2px solid #0085EF",
              borderRadius: "8px",
              p: 8,
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => handleScreenChange("generate")}
          >
            <AutoModeOutlinedIcon
              sx={{ width: 60, height: 60, margin: "0 auto",color:"#0085EF"}}
            />
            <Typography variant="h6" color="#0085EF">
              GENERATE
            </Typography>
            <Typography>Describe your avatar and generate preview</Typography>
          </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );

  const renderUploadScreen = () => (
    <Box>
      {/* Header */}
      <Typography variant="h5" fontWeight="bold" mb={1}>
        AI Face
      </Typography>
      <Typography mb={3}>
        You can have a photo or video avatar for your assistant.
      </Typography>
      {/* Toggle Buttons */}
      <Box display="flex" mb={3}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            borderRadius: "20px",
            textTransform: "none",
            mr: 1,
            boxShadow: "none",
          }}
        >
          PHOTO
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          sx={{
            borderRadius: "20px",
            textTransform: "none",
            boxShadow: "none",
          }}
        >
          VIDEO
        </Button>
      </Box>
  
      {/* Description */}
      <Typography mb={2}>
        You can upload, generate your assistant’s face by clicking{" "}
        <strong>Create button</strong> or select from the ready ones!
      </Typography>
  
      {/* Avatar Options */}
      <Grid container spacing={2} justifyContent="left">
        {/* Create Button */}
        <Grid item xs={9} sm={3} md={2} lg={2}>
          <Box
            component="label" // Makes the box clickable for file upload
            htmlFor="photo-upload" // Links the label to the input
            sx={{
              border: "2px dashed #1976D2",
              borderRadius: "8px",
              textAlign: "center",
              p: 2,
              height: "100%",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "#E3F2FD", // Adds hover effect
              },
            }}
          >
            <AddCircleOutlineRoundedIcon
              sx={{ width: 50, height: 50, margin: "0 auto", color:"#0085EF"}}
            />
            <Typography variant="body2" color="primary" fontWeight="bold">
              Create
            </Typography>
            <Typography variant="caption" color="textSecondary">
              (upload & generate)
            </Typography>
            {/* Hidden File Input */}
            <input
             id="photo-upload"
             type="file"
             accept="image/*"
             multiple
             hidden
             onChange={handleFileUpload}
             />
          </Box>
        </Grid>
        {/* Custom Avatars */}
        {customAvatars.map((avatarUrl, index) => (
          <Grid item xs={9} sm={3.5} md={2.5} key={index} >
            <Box
              sx={{
                height: "200px",
                borderRadius: "50%",
                backgroundImage: `url(${avatarUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: selectedAvatar?.type === 'custom' && selectedAvatar.index === index? "5px solid #1976D2": "none",
                cursor: "pointer",
              }}
              onClick={() => handleAvatarSelect('custom', index)}
            />
          </Grid>
        ))}
      {/* Display Uploaded Images */}
        {uploadedImages.map((image, index) => (
        <Grid item xs={9} sm={3.5} md={2.5} key={index}>
        <Box
        sx={{
         height: "200px",
         width: "200px",
         borderRadius: "50%",
         backgroundImage: `url(${image})`,
         backgroundSize: "cover",
         backgroundPosition: "center",
         border: selectedAvatar?.type === 'uploaded' && selectedAvatar.index === index? "5px solid #1976D2": "none",
         cursor: "pointer",
         }}
         onClick={() => handleAvatarSelect('uploaded', index)}
         />
        </Grid>
        ))}
        </Grid>
      <Box textAlign="right" mt={4}>
        <Button onClick={() => handleScreenChange("main")} variant="outlined">
          Back
        </Button>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#2196F3",
            color: "#fff",
            borderRadius: "20px",
            textTransform: "none",
            px: 4,
            ml:5,
            "&:hover": { backgroundColor: "#FF00CD" },
          }}
        >
          Save and continue
          <ArrowForwardIosOutlinedIcon
            sx={{ ml: 1 }}
          />
        </Button>
      </Box>
    </Box>
  );

  const renderGenerateScreen = () => (
    <Box>
      <Typography variant="h5" mb={3}>
      <PaletteOutlinedIcon sx={{mr:"8px"}}></PaletteOutlinedIcon>
        Describe Your Assistant’s Look
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Gender"
            name="gender"
            value={description.gender}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Age"
            name="age"
            value={description.age}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Ethnicity"
            name="ethnicity"
            value={description.ethnicity}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Box mt={2}>
        <TextField
          fullWidth
          label="Appearance"
          name="appearance"
          multiline
          rows={4}
          placeholder="e.g., Tall, with brown hair and glasses"
          value={description.appearance}
          onChange={handleInputChange}
        />
      </Box>
      <Box textAlign="right" mt={4}>
        <Button onClick={() => handleScreenChange("main")} variant="outlined">
          Back
        </Button>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#2196F3",
            color: "#fff",
            borderRadius: "20px",
            textTransform: "none",
            px: 4,
            ml:5,
            "&:hover": { backgroundColor: "#FF00CD" },
          }}
        >
          Generate Preview
          <ArrowForwardIosOutlinedIcon sx={{ ml:1}} />
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box p={3}>
      {screen === "main" && renderMainScreen()}
      {screen === "upload" && renderUploadScreen()}
      {screen === "generate" && renderGenerateScreen()}
    </Box>
  );
};

export default AIFace;


