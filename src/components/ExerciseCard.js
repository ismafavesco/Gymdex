import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import "./ExerciseCard.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ExerciseCard = ({ index, exercise }) => {
  const { id } = useParams();

  return (
    <Link
      className="exercise-card"
      to={`/exercise/${exercise.id}`}
      sx={{ position: "relative" }}
    >
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        Loading="lazy"
        sx={{ mt: { lg: "50px" } }}
      />
      <Stack direction="row">
        <Button
          className="button1"
          size="small"
          sx={{
            ml: "21px",
            color: "#40513B",
            background: "#EDF1D6",
            fontSize: "14px",
            fontWeight: "700",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          className="button2"
          sx={{
            ml: "21px",
            color: "#EDF1D6",
            background: "#40513B",
            fontSize: "14px",
            fontWeight: "700",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        className="exercise-name"
        ml="21px"
        color="#fff"
        fontWeight="300"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="15px"
        fontFamily={"DM Mono"}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
