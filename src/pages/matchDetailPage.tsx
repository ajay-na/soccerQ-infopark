import { Box } from "@mui/material";
import { MatchList } from "../api/configApi";
import MatchDetailTop from "../components/matchDetail/MatchDetailTop";
import TeamNameList from "../components/matchDetail/TeamNames";

export default function MatchDetail() {
  const MatchDetail = MatchList;
  return (
    <Box sx={{ minHeight: "calc(100vh - (34px + 0px))" }}>
      <MatchDetailTop match={MatchDetail[0]} />
      <TeamNameList team1={MatchDetail[0].team1} team2={MatchDetail[0].team2} />
    </Box>
  );
}
