import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  IconButton,
  Button,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Tooltip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const initialAssistants = [
  {
    id: 1,
    name: "ChatBot Alpha",
    avatarUrl: "https://www.example.com/avatar1.jpg", // Example image
    voice: "English (US)",
    description: "A friendly AI assistant for customer support.",
  },
  {
    id: 2,
    name: "SupportBot",
    avatarUrl: "https://www.example.com/avatar2.jpg", // Example image
    voice: "Spanish (MX)",
    description: "Handles technical support inquiries.",
  },
  {
    id: 3,
    name: "SalesBot",
    avatarUrl: "https://www.example.com/avatar3.jpg", // Example image
    voice: "English (UK)",
    description: "Automates sales and lead generation.",
  },
];

const CreatedAiAssistants = () => {
  const [assistants, setAssistants] = useState(initialAssistants);
  const [openDialog, setOpenDialog] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentAssistant, setCurrentAssistant] = useState({
    id: 0,
    name: "",
    avatarUrl: "",
    voice: "",
    description: "",
  });

  // Handle Add/Edit Assistant
  const handleOpenDialog = (assistant: { id: number; name: string; avatarUrl: string; voice: string; description: string; } | null = null) => {
    if (assistant) {
      setIsEditMode(true);
      setCurrentAssistant(assistant);
    } else {
      setIsEditMode(false);
      setCurrentAssistant({ id: 0, name: "", avatarUrl: "", voice: "", description: "" });
    }
    setOpenDialog(true);
  };

  // Save or update assistant data
  const handleSaveAssistant = () => {
    if (isEditMode) {
      setAssistants(
        assistants.map((assistant) =>
          assistant.id === currentAssistant.id ? currentAssistant : assistant
        )
      );
    } else {
      setAssistants([
        ...assistants,
        { ...currentAssistant, id: assistants.length + 1 },
      ]);
    }
    setOpenDialog(false);
  };

  // Handle Delete Assistant
  const handleDelete = (id: number) => {
    setAssistants(assistants.filter((assistant) => assistant.id !== id));
  };

  return (
    <Box p={3}>
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        Created AI Assistants
      </Typography>

      {/* Add New Assistant Button */}
      <Box mb={3}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Create New Assistant
        </Button>
      </Box>

      {/* AI Assistants List */}
      <Grid container spacing={3}>
        {assistants.map((assistant) => (
          <Grid item xs={12} sm={6} md={4} key={assistant.id}>
            <Card sx={{ padding: 2, boxShadow: 3 }}>
              {/* Avatar */}
              <Box display="flex" justifyContent="center" mb={2}>
                <Avatar
                  src={assistant.avatarUrl}
                  alt={assistant.name}
                  sx={{ width: 80, height: 80 }}
                />
              </Box>
              <Typography variant="h6" align="center" fontWeight="bold">
                {assistant.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center">
                {assistant.voice}
              </Typography>
              <Typography variant="body2" color="textSecondary" mt={1} align="center">
                {assistant.description}
              </Typography>
              {/* Action Buttons */}
              <Box display="flex" justifyContent="center" mt={2}>
                <Tooltip title="Edit Assistant">
                  <IconButton onClick={() => handleOpenDialog(assistant)}>
                    <EditIcon color="primary" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete Assistant">
                  <IconButton onClick={() => handleDelete(assistant.id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add/Edit Assistant Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth maxWidth="sm">
        <DialogTitle>{isEditMode ? "Edit Assistant" : "Create New Assistant"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Assistant Name"
            value={currentAssistant.name}
            onChange={(e) => setCurrentAssistant({ ...currentAssistant, name: e.target.value })}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Avatar URL"
            value={currentAssistant.avatarUrl}
            onChange={(e) => setCurrentAssistant({ ...currentAssistant, avatarUrl: e.target.value })}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Voice"
            value={currentAssistant.voice}
            onChange={(e) => setCurrentAssistant({ ...currentAssistant, voice: e.target.value })}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Description"
            value={currentAssistant.description}
            onChange={(e) => setCurrentAssistant({ ...currentAssistant, description: e.target.value })}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveAssistant} color="primary">
            {isEditMode ? "Save Changes" : "Create Assistant"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CreatedAiAssistants;

