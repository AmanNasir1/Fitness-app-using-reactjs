import React from "react";
import { Button, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercises }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercises.id}`}>
      <img src={exercises.gifUrl} alt={exercises.name} loading="lazy" />
      <Stack direction="row"></Stack>
    </Link>
  );
};

export default ExerciseCard;
