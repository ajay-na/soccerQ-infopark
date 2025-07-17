import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import type { MatchDto } from "../../dto/dto";
import Score from "../Score";
interface Props {
  match: MatchDto;
}

export default function MatchDetailTop({ match }: Props) {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <Button onClick={() => navigate("/")}>
        <ArrowBackIcon
          sx={{
            marginLeft: "15px",
            color: "white",
            backgroundColor: "#FFFFFF33",
            borderRadius: "50%",
            padding: "7px",
          }}
        />
      </Button>
      <Box
        sx={{
          maxWidth: "50%",
          backgroundColor: "#5b46f5",
          border: "5px solid #ffcc00",
          width: "250px",
          height: "204px",
          position: "absolute",
          top: "50%",
          left: "53%",
          transform: "translateX(-53%)",
          fontSize: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Score match={match} />
      </Box>
    </Box>
  );
}
