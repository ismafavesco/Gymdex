import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import { useEffect } from "react";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, equipment, gifUrl, name, target, instructions } =
    exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  useEffect(() => {
    const timerId = setTimeout(() => {
      window.scrollTo({ top: 0, left: 100, behavior: "smooth" });
    }, 500);

    // Cleanup: Clear the timer if the component is unmounted before the 3 seconds are up
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  console.log("Instructions");
  console.log(instructions);

  return (
    <Stack sx={{ gap: { lg: "100px", xs: "30px" }, p: { xs: "10px" } }}>
      <Stack
        sx={{
          flexDirection: { lg: "row", xs: "column-reverse" },
          p: "20px",
          alignItems: "center",
          marginTop: { lg: "50px", xs: "10px" },
          gap: { lg: "60px", xs: "20px" },
        }}
      >
        <Typography
          sx={{ display: { lg: "none", xs: "block" } }}
          fontSize="30px"
          textTransform="capitalize"
          
          style={{
            opacity: 0, // start from fully transparent
            animation: "fadeIn 0.5s ease-in forwards", // apply the fadeIn animation
          }}
          fontFamily={"DM Mono"}
          borderBottom={"2px solid white"}
        >
          {name}
        </Typography>
        <div className="detail-card">
          <img src={gifUrl} alt={name} loading="lazy" style={{ maxWidth: "100%" }} />
        </div>
        <Stack sx={{ gap: { lg: "35px", xs: "15px" } }}>
          <Typography
            sx={{ display: { lg: "block", xs: "none" } }}
            variant="h3"
            textTransform="capitalize"
            color="#9EB384"
            borderBottom = "1px solid white"

            style={{
              opacity: 0, // start from fully transparent
              animation: "fadeIn 0.5s ease-in forwards", // apply the fadeIn animation
            }}
            
          >
            {name}
          </Typography>
          <Typography
            sx={{ display: { lg: "none", xs: "block" } }}
            fontSize="30px"
            textTransform="capitalize"
            color="#9EB384"
            borderBottom = "1px solid white"

            style={{
              opacity: 0, // start from fully transparent
              animation: "fadeIn 0.5s ease-in forwards", // apply the fadeIn animation
            }}
            fontFamily={"DM Mono"}
            // borderBottom={"2px solid white"}
          >
            {name}
          </Typography>

          <Typography
            variant="h6"
            style={{
              opacity: 0, // start from fully transparent
              animation: "fadeIn 1s ease-in forwards", // apply the fadeIn animation
            }}
            sx={{
              fontSize: { lg: "20px", xs: "15px" },
              p: { lg: 0, xs: "5px" },
            }}
          >
            The {name}, a classic in the realm of fitness and a gem for
            targeting your {target}. You've stumbled upon a pivotal exercise that
            can redefine your workout routine.
            <br />
            <br />
            The charm of {name} isn't just in its effectiveness, but also in its
            versatility. Suitable for everyone, this exercise aims to engage, challenge, and
            ultimately fortify your {target}.
          </Typography>

          {extraDetail.map((item) => (
            <Stack
              className="detail-icons"
              key={item.name}
              direction="row"
              gap="16px"
              alignItems="center"
              width="100%"
            >
              <Button>
                <img src={item.icon} alt="workout-icon" style={{ filter: "brightness(0) invert(1)", maxWidth: "40px" }} />
              </Button>
              <Typography variant="h6" textTransform="capitalize">
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Stack gap="10px" sx={{ p: { lg: "0 0", xs: "0 10px" } }}>
        <Typography
          sx={{
            p: { lg: "0 0", xs: "0 5px" },
             //borderBottom: "1px solid white",
            mb: { lg: "35px", xs: "10px" },
            fontSize: { lg: "48px", xs: "30px" },
          }}
        >
          Instructions
        </Typography>

        {instructions &&
          instructions.map((paragraph, index) => (
            <Typography
              key={index}
              variant="h5"
              style={{
                opacity: 0,
                animation: `fadeIn 1s ease-in ${index * 0.5}s forwards`,
              }}
              sx={{ fontSize: { lg: "24px", xs: "18px" } }}
            >
              • {paragraph}
            </Typography>
          ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
