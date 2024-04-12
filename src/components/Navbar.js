import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconButton, Popover } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../assets/images/Logo.png";
import { motion } from "framer-motion";
import { FiHome, FiActivity, FiCoffee } from "react-icons/fi";

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};

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

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 15px 10px 0px",
        background: "transparent",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: 1000,
        "@media (min-width: 768px)": {
          marginTop: "40px",
        },
      }}
    >
      {location.pathname.includes("/exercise/") ? (
        <div style={{ width: "200px" }}></div>
      ) : (
        <Link to="/">
          <img src={Logo} alt="Logo" style={{ height: "100px" }} />
        </Link>
      )}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
        style={{
          backgroundColor: "#21221f",
          borderRadius: "50%",
          border: "2px solid #FAF1E4",
          transition: "transform 0.5s ease",
          padding: "10px",
        }}
      >
        {menuOpen ? (
          <CloseIcon style={{ fontSize: "30px", color: "#FAF1E4" }} />
        ) : (
          <MenuIcon style={{ fontSize: "30px", color: "#FAF1E4" }} />
        )}
      </IconButton>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          style: {
            width: "300px",
            maxWidth: "100%",
            background: "#435334",
            color: "#FAF1E4",
            border: "none",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            "@media (min-width: 768px)": {
              width: "300px",
            },
          },
        }}
      >
        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          animate={menuOpen ? "open" : "closed"}
          style={{ width: "100%", padding: "30px" }}
        >
          <Option
            setOpen={setMenuOpen}
            Icon={FiHome}
            text="Home"
            to="/"
            onClick={handleClose}
          />
          <Option
            setOpen={setMenuOpen}
            Icon={FiActivity}
            text="Exercises"
            to="#exercises"
            onClick={handleClose}
          />
          <Option
            setOpen={setMenuOpen}
            Icon={FiCoffee}
            text="Buy me a coffee?"
            to="https://www.buymeacoffee.com/ismafavesco"
            onClick={handleClose}
          />
        </motion.ul>
      </Popover>
    </div>
  );
};

const Option = ({ text, Icon, setOpen, to, onClick }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => {
        setOpen(false);
        onClick();
      }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "100%",
        padding: "12px",
        fontSize: "16px",
        fontWeight: "500",
        whiteSpace: "nowrap",
        borderRadius: "8px",
        color: "#d1d5db",
        cursor: "pointer",
        transition: "background-color 0.3s, color 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#4c7856";
        e.currentTarget.style.color = "#ffffff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.color = "#d1d5db";
      }}
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <Link to={to} className="navbar-link">
        {text}
      </Link>
    </motion.li>
  );
};

export default Navbar;