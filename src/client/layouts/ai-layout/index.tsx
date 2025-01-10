import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Paper,
  Button,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent
} from "@mui/material";
import { motion } from "framer-motion";

const AILayout = () => {
  const [selectedAssistant, setSelectedAssistant] = useState("");
  const [layout, setLayout] = useState("bubble");

  // Sample list of assistants (replace with dynamic data as needed)
  const assistants = [
    { id: "assistant1", name: "Assistant 1" },
    { id: "assistant2", name: "Assistant 2" },
    { id: "assistant3", name: "Assistant 3" }
  ];

  const handleAssistantChange = (event: SelectChangeEvent<string>) => {
    setSelectedAssistant(event.target.value as string);
  };

  const handleLayoutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLayout(event.target.value);
  };

  const handleSave = () => {
    // Save functionality (e.g., send selected layout to an API)
    console.log("Selected Assistant:", selectedAssistant);
    console.log("Selected Layout:", layout);
  };
  const layouts = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
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
    <Box p={3}>
      {/* Assistant Selector */}
      <FormControl
        fullWidth
        sx={{ mb: 3 }}
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
        <Typography
        variant="h4"
        mb={2}
      >
        AI Layout
      </Typography>
      </motion.div>

      {/*Subheader*/}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={subheaderVariants}
         >
      <Typography
        variant="body1"
        mb={3}
      >
        Choose the layout for your AI assistant. You can select between a bubble
        or full-screen layout.
      </Typography>
      </motion.div>

      <motion.div
        variants={layouts}
        initial="hidden"
        animate="visible"
        whileHover="hover"
          >
      <FormControl
        component="fieldset"
        fullWidth
      >
        <FormLabel component="legend">Select Layout</FormLabel>
        <RadioGroup
          value={layout}
          onChange={handleLayoutChange}
          sx={{ mt: 2 }}
        >
          <Grid
            container
            spacing={2}
          >
          
            {/* Bubble Layout Option */}
            <Grid
              item
              xs={12}
              md={6}
            >
              <Paper
                elevation={layout === "bubble" ? 4 : 1}
                sx={{
                  padding: 2,
                  textAlign: "center",
                  border: layout === "bubble" ? "2px solid" : "1px solid",
                  borderColor: layout === "bubble" ? "primary.main" : "divider"
                }}
              >
                <FormControlLabel
                  value="bubble"
                  control={<Radio />}
                  label="Bubble Layout"
                />
                <Box
                  mt={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 40,
                    borderRadius: "50%",
                    bgcolor: "primary.light"
                  }}
                >
                  <Typography variant="body2">Bubble Preview</Typography>
                </Box>
              </Paper>
            </Grid>

            {/* Full-Screen Layout Option */}
            <Grid
              item
              xs={12}
              md={6}
            >
              <Paper
                elevation={layout === "full-screen" ? 4 : 1}
                sx={{
                  padding: 2,
                  textAlign: "center",
                  border: layout === "full-screen" ? "2px solid" : "1px solid",
                  borderColor:
                    layout === "full-screen" ? "primary.main" : "divider"
                }}
              >
                <FormControlLabel
                  value="full-screen"
                  control={<Radio />}
                  label="Full-Screen Layout"
                />
                <Box
                  mt={2}
                  sx={{
                    height: 40,
                    bgcolor: "primary.light",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Typography variant="body2">Full-Screen Preview</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </RadioGroup>
      </FormControl>
      </motion.div>

      {/* Save Button */}
      <Box mt={3} textAlign="right">
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          disabled={!selectedAssistant} // Disable if no assistant is selected
          sx={{
            "&:hover": { backgroundColor: "#FF00CD" },
            
            borderRadius:"20px"
          }}
        >
          Save Selected Layout
        </Button>
      </Box>
    </Box>
  );
};

export default AILayout;

