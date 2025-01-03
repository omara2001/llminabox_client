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
import { motion } from "framer-motion";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const initialAssistants = [
  {
    id: 1,
    name: "ChatBot Alpha",
    avatarUrl: "https://www.example.com/avatar1.jpg",
    voice: "English (US)",
    description: "A friendly AI assistant for customer support.",
  },
];

interface LaunchYourAssistantProps {
  setPage: (page: string) => void;
}

const CreatedAiAssistant: React.FC<LaunchYourAssistantProps> = ({ setPage }) => {
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
  const [selectedAssistantId, setSelectedAssistantId] = useState<number | null>(null);

  const handleOpenDialog = (assistant: typeof initialAssistants[0] | null = null) => {
    if (assistant) {
      setIsEditMode(true);
      setCurrentAssistant(assistant);
    } else {
      setIsEditMode(false);
      setCurrentAssistant({ id: 0, name: "", avatarUrl: "", voice: "", description: "" });
    }
    setOpenDialog(true);
  };

  const handleSaveAssistant = () => {
    if (isEditMode) {
      setAssistants(
        assistants.map((assistant) =>
          assistant.id === currentAssistant.id ? currentAssistant : assistant
        )
      );
    } else {
      setAssistants([...assistants, { ...currentAssistant, id: assistants.length + 1 }]);
    }
    setOpenDialog(false);
  };

  const handleDelete = (id: number) => {
    setAssistants(assistants.filter((assistant) => assistant.id !== id));
  };

  return (
    <Box p={3}>
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        Your Created AI Assistants
      </Typography>

      <Box mb={3} sx={{ textAlign: { xs: "center", sm: "right" } }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Create New Assistant
        </Button>
      </Box>

      {/* Display all assistants */}
      <Grid container spacing={3}>
        {assistants.map((assistant) => (
          <Grid item xs={12} sm={6} md={4} key={assistant.id}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                border: assistant.id === selectedAssistantId ? "2px solid #2196F3" : "2px solid transparent",
                backgroundColor: "#fff",
                boxShadow: assistant.id === selectedAssistantId ? "0 4px 10px rgba(0, 0, 0, 0.2)" : "0 2px 5px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              onClick={() => setSelectedAssistantId(assistant.id)}
            >
              <Card sx={{ padding: 5, boxShadow: 0 }}>
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
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Box textAlign="right" mt={4}>
        <Button onClick={() => setPage("main")}>Back</Button>
        <Button
          variant="contained"
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
          Save and continue
          <ArrowForwardIosOutlinedIcon sx={{ ml: 1 }} />
        </Button>
      </Box>

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

export default CreatedAiAssistant;

