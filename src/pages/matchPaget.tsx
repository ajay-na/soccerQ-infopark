import { Box, Skeleton, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Daylist from "../components/DayList";
import MatchCard from "../components/MatchCard";
import { BASE_URL } from "../constants";
import useFetch from "../useFetch";

export default function MatchPage() {
  const day = useSelector((state: any) => state.days.day);
  const url = `${BASE_URL}matches?date=${day}`;
  let { data, loading, error } = useFetch(url, day);

  return (
    <Box
      sx={{
        backgroundColor: "#050312",
        minHeight: "calc(100vh - (56px + 32.02px + 16px))",
        marginTop: 2,
        overflowY: "auto",
        paddingBottom: "56px",
      }}
    >
      <Box>
        <Daylist />z
        {loading && (
          <Stack spacing={1} width={"80%"} mx={"auto"}>
            <Skeleton
              sx={{ bgcolor: "white" }}
              variant="rounded"
              width={"100%"}
              height={60}
            />
            <Skeleton
              sx={{ bgcolor: "white" }}
              variant="rounded"
              width={"100%"}
              height={60}
            />{" "}
            <Skeleton
              sx={{ bgcolor: "white" }}
              variant="rounded"
              width={"100%"}
              height={60}
            />{" "}
            <Skeleton
              sx={{ bgcolor: "#160e59" }}
              variant="rounded"
              width={"100%"}
              height={60}
            />
          </Stack>
        )}
        {error && (
          <Box>
            <Typography color="white">its errorrrrrrrrrrrrrr</Typography>
          </Box>
        )}
        {data &&
          data.length &&
          data.map((match: any) => <MatchCard match={match} key={match.id} />)}
      </Box>
    </Box>
  );
}
