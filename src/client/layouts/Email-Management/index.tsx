import React, { useState } from "react";
import { Box, Tabs, Tab, Typography, Card } from "@mui/material";
import Profile from "@/client/layouts/client-profile";
import SignIn from "@/client/layouts/auth-signin";
import SignUp from "@/client/layouts/auth-signup";

function EmailManagement() {
  const [selectedTab, setSelectedTab] = useState(0);

  // Handle tab change
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Page Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={4}
        color="primary"
      >
        Email Management Dashboard
      </Typography>

      {/* Tabs Navigation */}
      <Card sx={{ boxShadow: 3, mb: 4 }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Sign Up" />
          <Tab label="Sign In" />
          <Tab label="Profile" />
          <Tab label="Manage Emails" />
        </Tabs>
      </Card>

      {/* Tabs Content */}
      <Box>
        {selectedTab === 0 && (
          <Box>
            <Typography variant="h5" gutterBottom>
              Sign Up
            </Typography>
            <SignUp />
          </Box>
        )}
        {selectedTab === 1 && (
          <Box>
            <Typography variant="h5" gutterBottom>
              Sign In
            </Typography>
            <SignIn />
          </Box>
        )}
        {selectedTab === 2 && (
          <Box>
            <Typography variant="h5" gutterBottom>
              Profile
            </Typography>
            <Profile />
          </Box>
        )}
        {selectedTab === 3 && (
          <Box>
            <Typography variant="h5" gutterBottom>
              Manage Emails
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Here you can manage your email settings such as changing your email,
              subscribing to newsletters, and setting up notifications.
            </Typography>

            {/* Email Management Section */}
            <Card sx={{ mt: 3, p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Update Email Address
              </Typography>
              <Box mb={2}>
                <Typography variant="body2" color="textSecondary">
                  Current Email: <strong>janedoe@chatbotcorp.com</strong>
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography variant="body2" color="textSecondary">
                  New Email Address:
                </Typography>
                <input
                  type="email"
                  placeholder="Enter new email"
                  style={{
                    padding: "8px",
                    width: "100%",
                    marginBottom: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </Box>
              <Box mb={2}>
                <button
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "#3f51b5",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Update Email
                </button>
              </Box>

              {/* Email Preferences */}
              <Typography variant="h6" gutterBottom mt={4}>
                Email Preferences
              </Typography>
              <Box>
                <input type="checkbox" id="newsletters" />
                <label htmlFor="newsletters" style={{ marginLeft: "8px" }}>
                  Subscribe to Newsletters
                </label>
              </Box>
              <Box>
                <input type="checkbox" id="notifications" />
                <label htmlFor="notifications" style={{ marginLeft: "8px" }}>
                  Receive Email Notifications
                </label>
              </Box>
            </Card>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default EmailManagement;


