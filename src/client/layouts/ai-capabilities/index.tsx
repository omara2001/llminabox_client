import React, { useState } from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent
} from "@mui/material";
import { motion } from "framer-motion";

const AICapabilities = () => {
  const [selectedAssistant, setSelectedAssistant] = useState("");
  const [capabilities, setCapabilities] = useState<string[]>([]);

  // Sample list of assistants (replace with dynamic data as needed)
  const assistants = [
    { id: "assistant1", name: "Assistant 1" },
    { id: "assistant2", name: "Assistant 2" },
    { id: "assistant3", name: "Assistant 3" }
  ];

  // Define a list of capabilities that can be selected
  const capabilityOptions = [
    "Natural Language Processing",
    "Speech Recognition",
    "Image Recognition",
    "Sentiment Analysis",
    "Data Analysis",
    "Predictive Analytics",
    "Machine Translation",
    "Chatbot Interaction"
  ];

  // Handle assistant selection
  const handleAssistantChange = (event: SelectChangeEvent<string>) => {
    setSelectedAssistant(event.target.value as string);
  };

  // Handle checkbox change
  const handleCheckboxChange = (capability: string) => {
    setCapabilities(
      (prev) =>
        prev.includes(capability)
          ? prev.filter((item) => item !== capability) // Remove if already selected
          : [...prev, capability] // Add if not already selected
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the selected capabilities, e.g., send them to an API with the selected assistant
    console.log("Selected assistant:", selectedAssistant);
    console.log("Selected capabilities:", capabilities);
  };
  const Options = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const subheaderVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
  };
  return (
    <Box
      p={3}
      component="form"
      onSubmit={handleSubmit}
    >
      {/* Assistant Selector */}
      <FormControl
        fullWidth
        sx={{ mb: 3,  Color:"#008EFF",}}
      >
        <InputLabel>Select AI Assistant</InputLabel>
        <Select
          value={selectedAssistant}
          onChange={handleAssistantChange}
          label="Select AI Assistant"
        >
          {assistants.map((assistant) => (
            <MenuItem
              key={assistant.id}
              value={assistant.id}
            >
              {assistant.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
       {/*Header*/}
      <motion.div
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      >
      <Typography variant="h5" fontWeight="bold" fontFamily="Merriweather Sans" mb={2}>
        AI Capabilities
      </Typography>
      </motion.div>
       {/*Subheader*/}
       <motion.div
        initial="hidden"
        animate="visible"
        variants={subheaderVariants}
         >
      <Typography variant="body1" mb={3}>
        Choose the capabilities you want to enable for your AI assistant.
      </Typography>
      </motion.div>

      <FormGroup>
        <Grid
          container
          spacing={2}
        >
          {capabilityOptions.map((capability) => (
            <Grid item xs={12} sm={6} md={5} key={capability} >
              <motion.div
              variants={Options}
              initial="hidden"
              animate="visible"
              whileHover="hover"
                >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={capabilities.includes(capability)}
                    onChange={() => handleCheckboxChange(capability)}
                  />
                }
                label={capability}
              />
            </motion.div>  
            </Grid>
          ))}
        </Grid>
      </FormGroup>

      <Box mt={3} textAlign="right">
     <Button
      variant="contained"
      type="submit"
      disabled={!selectedAssistant} // Disable if no assistant selected
      sx={{
        backgroundColor: "#2196F3",
        color: "#fff",
        borderRadius: "20px",
        textTransform: "none",
        px: 4,
        ml: 5,
        "&:hover": { backgroundColor: "#FF00CD" },
          }}
        >
        Save capabilities
        
       </Button>
       </Box>

    </Box>
  );
};

export default AICapabilities;

