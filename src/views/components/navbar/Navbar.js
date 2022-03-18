import React from "react";
import "./Navbar.css";

import { AppBar, Avatar, Toolbar } from "@mui/material";

const logoSrc = "https://i.imgur.com/KpfCJGS.png";

function Navbar() {
  return (
    <div className="navbar">
      <AppBar position="sticky">
        <Toolbar>
          <Avatar
            alt="Pokemon Logo"
            src={logoSrc}
            sx={{ width: 48, height: 48 }}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
