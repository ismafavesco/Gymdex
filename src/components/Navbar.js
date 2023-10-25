import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconButton, Popover, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const linkStyle = {
    
    textDecoration: 'none',
    color: '#FAF1E4',
    transition: 'color 0.3s ease',
    display: 'block',
    padding: '10px 15px',
    '&:hover': {
      color: '#21221f',
      background: '#21221f'
    }
  };

  return (
    <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '10px 30px 10px 0px', 
        background: 'transparent',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: 1000,
        '@media (min-width: 768px)': {
          marginTop: '40px'
        }
      }}>
      {location.pathname.includes("/exercise/") ? <div style={{ width: "200px" }}></div> : (
        <Link to="/">
          <img src={Logo} alt="Logo" style={{ height: "120px"}}
          position="absolute"/> 
        </Link>
      )}

      <IconButton 
        edge="start" 
        color="inherit" 
        aria-label="menu" 
        onClick={handleClick}
        style={{
          backgroundColor: '#21221f',
          borderRadius: '50%',
          border: '2px solid #FAF1E4',
          transition: 'transform 0.5s ease'
        }}
      >
        {menuOpen ? <CloseIcon style={{ fontSize: '30px', color: '#FAF1E4' }} /> : <MenuIcon style={{ fontSize: '30px', color: '#D0D0D0' }} />}
      </IconButton>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          style: {
            width: '50%',
            maxWidth: '200px',
            background: '#435334',
            color: '#435334',
            border: 'none',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            borderRadius: '25px',
            '@media (min-width: 768px)': {
              width: '100%',
              maxWidth: '500px'
            }
          }
        }}
      >
        <List>
          <ListItem button onClick={handleClose} style={{ padding: '0', borderBottom: "2px solid white"  }}>
            <Link to ="/" style={linkStyle}>Home</Link>
          </ListItem>
          <ListItem button onClick={handleClose} style={{ padding: '0', borderBottom: "2px solid white" }}>
            <a href="/exercises" style={linkStyle}>Exercises</a>
          </ListItem>
          <ListItem button onClick={handleClose} style={{ padding: '0', }}>
            <a href="https://www.buymeacoffee.com/ismafavesco" target="_blank" style={linkStyle}>Buy me a coffee?</a>
          </ListItem>
        </List>
      </Popover>
    </div>
  );
};

export default Navbar;
