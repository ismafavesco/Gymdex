import React from "react";
import { Box, Stack, Typography, Button, useTheme } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
import ChevronDown from "../assets/icons/down-arrow.png";

const HeroBanner = () => {
  const theme = useTheme();

  const handleScrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight, // Scroll by the height of the viewport (approx. next section/page)
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        mt: { lg: "310px", xs: "140px" },
        ml: { sm: "50px" },
        mb: { lg: "0px", xs: "0px" },
        p: { lg: "20px", xs: "30px" },
        height: { lg: "674px", xs: "84vh" },
      }}
      position="relative"
    >
      <Typography
        color="#9DC08B"
        fontWeight="600"
        sx={{ fontSize: { xs: "px", lg: "36px" } }}
      >
        Welcome!
      </Typography>
      <Typography
        fontWeight="700"
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
          mb: { lg: "23px", xs: "10px" },
          mt: { lg: "30px", xs: "20px" },
        }}
      >
        Your Fitness Journey,
        <br /> By The Hand of Gymdex.
      </Typography>
      <Typography
        sx={{ fontSize: { lg: "22px", xs: "20px" } }}
        LineHeight="35px"
        mb={4}
      >
        Dive into workouts that bring results.
      </Typography>
      <Button
        variant="contained"
        onClick={handleScrollToNextSection}
        sx={{ backgroundColor: "#40513B", padding: "10px" }}
      >
        Get Started
      </Button>
      <Typography
        fontWeight={600}
        color="#609966"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
      <Box
        position="absolute"
        bottom="70px"
        left="47%"
        transform="translateX(-50%)"
        sx={{
          display: { xs: "block", lg: "none" }, // Display only on mobile
          animation: "bounce 1s infinite",
        }}
        onClick={handleScrollToNextSection}
      >
        <img
          src={ChevronDown}
          style={{ width: "30px", height: "auto" }}
          alt="down arrow"
        />
      </Box>

      {/* Keyframe animations */}
      <style jsx>
        {`
          @keyframes bounce {
            0%,
            20%,
            50%,
            80%,
            100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default HeroBanner;
