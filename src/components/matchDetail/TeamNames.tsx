import { Box, Typography } from "@mui/material";

export default function TeamNameList({
  team1,
  team2,
}: {
  team1: string;
  team2: string;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        color: "white",
        position: "relative",
        marginTop: "230px",
        justifyContent: "space-between",
        marginLeft: "20px",
        marginRight: "20px",
      }}
    >
      <Typography>{team1}</Typography>
      <Typography>vs</Typography>
      <Typography>{team2}</Typography>
    </Box>
  );
}
