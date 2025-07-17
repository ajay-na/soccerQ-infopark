import CircleIcon from "@mui/icons-material/Circle";
import { Box, Typography } from "@mui/material";

const getTime = (time: string): string => {
  const date = new Date(time);

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
};

export default function Score({ match }: { match: any }) {
  const type = match.startedAt
    ? match.endedAt
      ? "finished"
      : "live"
    : "upcoming";
  if (type === "live" || type === "finished")
    return (
      <Box sx={{ color: "white" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" mr={1}>
            {match.goal_team1}
          </Typography>
          <Typography variant="h5">-</Typography>
          <Typography variant="h5" ml={1}>
            {match.goal_team1}
          </Typography>
        </Box>
        <Box
          width={50}
          display={"flex"}
          alignItems={"flex-start"}
          margin={"auto"}
          justifyContent={"space-between"}
        >
          {type === "live" && (
            <CircleIcon
              sx={{
                fontSize: 15,
                color: "#08890a",
                border: "2px solid white",
                borderRadius: "50%",
              }}
            />
          )}
          <Typography textAlign={"center"}>
            {type === "live" ? "live" : "fulltime"}
          </Typography>
        </Box>
      </Box>
    );
  else
    return (
      <Box
        color="white"
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        mt={-1}
      >
        <Typography>{match.court}</Typography>
        <Typography fontFamily={"Audiowide"} variant="h5" color="yellow">
          V/S
        </Typography>
        <Typography>{getTime(match.datetime)}</Typography>
      </Box>
    );
}
