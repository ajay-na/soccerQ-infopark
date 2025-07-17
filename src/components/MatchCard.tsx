import { Box, Card, CardActionArea, Typography } from "@mui/material";
import Score from "./Score";

interface Props {
  match: any;
}

export default function MatchCard({ match }: Props) {
  return (
    <Card
      sx={{
        backgroundColor: "#07041b",
        padding: 3,
        marginBottom: 2,
        maxWidth: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        position: "relative",
        maxHeight: "50px",
      }}
    >
      <CardActionArea href="/match">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "90%",
            color: "white",
            backgroundColor: "#1d107f",
            padding: 2,
            borderRadius: 1,
          }}
        >
          <Typography>{match.team1.name}</Typography>
          <Typography>{match.team2.name}</Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#5b46f5",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            padding: 2.5,
            border: "2px solid yellow",
            borderRadius: 1,
            width: 70,
            height: 50,
            margin: "",
            // clipPath:
            //   "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            // boxShadow: "0 0 10px 10px rgba(255,0,0)",
          }}
        >
          <Score match={match} />
        </Box>
      </CardActionArea>
    </Card>
  );
}
