import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import matchImage from "../assets/football-svgrepo-com.svg";
import trophyImage from "../assets/football-trophy-award-svgrepo-com.svg";
import playerImage from "../assets/player-king-svgrepo-com.svg";

export default function Navbar() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState<"/" | "/table" | "/stats">("/");

  const handleClick = (path: "/" | "/table" | "/stats") => {
    navigate(path);
    setSelection(path);
  };

  return (
    <Box>
      <Paper
        sx={{
          position: "absolute",
          bottom: 15,
          left: 10,
          right: 10,
          borderRadius: "54px",
          backgroundColor: "#1e1e1e",
        }}
        elevation={3}
      >
        <BottomNavigation
          sx={{
            display: "flex",
            borderRadius: "54px",
            backgroundColor: "#1e1e1e",
          }}
          showLabels
        >
          <BottomNavigationAction
            onClick={() => handleClick("/")}
            label="Matches"
            sx={{
              backgroundColor: selection === "/" && "#5b46f5",
              borderRadius: "54px",
              margin: "5px",
              color: "white",
            }}
            icon={
              <img
                src={matchImage}
                alt="matches"
                style={{ width: 30, height: 30, color: "white" }}
              />
            }
          />
          <BottomNavigationAction
            label="Table"
            onClick={() => handleClick("/table")}
            sx={{
              backgroundColor: selection === "/table" && "#5b46f5",
              borderRadius: "54px",
              margin: "5px",
              color: "white",
            }}
            icon={
              <img
                src={trophyImage}
                alt="table"
                style={{ width: 26, height: 26, color: "white" }}
              />
            }
          />
          <BottomNavigationAction
            label="Player"
            sx={{
              backgroundColor: selection === "/stats" && "#5b46f5",
              borderRadius: "54px",
              margin: "5px",
              color: "white",
            }}
            icon={
              <img
                src={playerImage}
                alt="player"
                style={{ width: 30, height: 30, color: "white" }}
              />
            }
            onClick={() => handleClick("/stats")}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
