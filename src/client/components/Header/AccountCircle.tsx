import React, { useState } from "react";
import { IconButton, Menu, MenuItem, Divider, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate } from "react-router-dom";

interface AccountCircleMenuProps {
  user: { email: string | null };
  onSignOut: () => void;
}

const AccountCircleMenu: React.FC<AccountCircleMenuProps> = ({ user, onSignOut }) => {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleProfileClick = () => {
    handleMenuClose();
    navigate("/email-management"); // Navigate to Email Management Profile
  };
  return (
    <>
      {user.email ? (
        <>
          <IconButton
            color="inherit"
            onClick={handleMenuOpen}
            sx={{ color: "#0085EF", marginLeft: "8px" }}
          >
            <AccountCircleOutlinedIcon />
          </IconButton>

          {/* Account Menu */}
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                backgroundColor: "#EAEAEA",
                color: "#000000",
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                borderRadius: "8px",
                minWidth: "200px",
              },
            }}
          >
            <MenuItem onClick={handleMenuClose}>
              <Typography variant="body2" color="#000000">
                {user.email}
              </Typography>
            </MenuItem>
            <Divider sx={{ borderColor: "#AFABAB" }} />
            <MenuItem onClick={handleProfileClick}>Email Management</MenuItem>
            <MenuItem onClick={() => open("https://criticalfutureglobal.com/")}>Support</MenuItem>
            <Divider sx={{ borderColor: "#AFABAB" }} />
            <MenuItem onClick={onSignOut}>
              <Typography variant="body2" color="error">
                Log out
              </Typography>
            </MenuItem>
          </Menu>
        </>
      ) : null}
    </>
  );
};

export default AccountCircleMenu;


