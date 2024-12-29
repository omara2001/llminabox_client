import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleMenu from "./AccountCircle"; // Adjust the path as needed
import logo from "@/client/assets/images/llminaboxlogo.png";


const Header: React.FC = () => {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));




  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  const user = {
    email: "janedoe@example.com",
  };
  
  const handleSignOut = () => {
    navigate("/logout");
  };
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(-90deg, #680F51 15%, #004073 50%, #011024 100%)", // Right to left gradient
        padding: { xs: "5px 10px", sm: "10px 20px" },
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Toolbar
        sx={{borderRadius: 1, 
          padding: 0,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {/* Logo and Branding */}
         <IconButton
            sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            marginLeft: "0",
            color:"rgb(130 ,150, 180)",
             }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={() => navigate("/")}
           >
         {/* Logo Image */}
        <img
            src={logo as string}
            alt="Brand Logo"
            style={{
            width: "40px", // Adjusted for prominence
            height: "auto",
            marginRight: "10px", // Space between logo and text
            boxShadow: "0 15px 10px rgba(10, 10, 10, 0.3)",
            transition: "transform 0.3s ease-in-out",
            }}
          />

          {/* Text Section */}
         <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
           {/* LLM Text */}
           <Typography
           variant="h6"
           sx={{
           color: "rgb(130 ,150, 180)",
           fontWeight: 800,
           letterSpacing: "3px", 
           fontSize: "1.20rem",
           padding:"auto",
           marginLeft:"7px",
             }}
             >
              L L M
          </Typography>
          {/* IN A BOX Text */}
             <Typography
              variant="body2"
              sx={{
               color: "rgb(220, 220, 220)",
               fontWeight: 700,
               letterSpacing: "1px",
               fontSize: "0.7rem",
      }}
    >
      ⎻ IN A BOX ⎻
    </Typography>
  </div>
</IconButton>

        {/* Navigation Links */}
        {!isMobile ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: "20px", ml: "auto" }}>
            <Button
              onClick={() => navigate("/pricing")}
              sx={{
                color: "#c7c5c5",
                textTransform: "none",
                fontWeight: "Bold",
                fontStyle:"italic",
                marginRight:"200px",
                "&:hover": { color: "#f5b81a" },
              }}
            >
              Pricing
            </Button>
            <Button
              onClick={() => navigate("/dashboard")}
              sx={{
                color: "#c7c5c5",
                textTransform: "none",
                fontWeight:"bold",
                marginRight:"200px",
                "&:hover": { color: "#f5b81a" },
              }}
            >
              Dashboard
            </Button>
            {/* Add AccountCircleMenu Here */}
            <AccountCircleMenu user={user} onSignOut={handleSignOut} />
            <IconButton
              edge="end"
              color="inherit"
              onClick={toggleMobileMenu}
              sx={{
                color: "#0085EF",
              }}
            >
              
            </IconButton>
          </Box>
        ) : (
          <IconButton
            edge="end"
            onClick={toggleMobileMenu}
            color="inherit"
            sx={{
              color: "#f5b81a",
            }}
          >
            <MenuIcon />
          </IconButton>
        )}        
      </Toolbar>
      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#07203c",
            padding: "10px 20px",
          }}
        >
          <Button
            onClick={() => {
              navigate("/pricing");
              toggleMobileMenu();
            }}
            sx={{
              color: "#c7c5c5",
              textTransform: "none",
              fontWeight: "bold",
              justifyContent: "flex-start",
              width: "100%",
              "&:hover": { color: "#f5b81a" },
            }}
          >
            Pricing
          </Button>
          <Button
            onClick={() => {
              navigate("/dashboard");
              toggleMobileMenu();
            }}
            sx={{
              color: "#c7c5c5",
              textTransform: "none",
              fontWeight: "bold",
              justifyContent: "flex-start",
              width: "100%",
              "&:hover": { color: "#f5b81a" },
            }}
          >
            Dashboard
          </Button>
        </Box>
      )}
    </AppBar>
  );
};

export default Header;
