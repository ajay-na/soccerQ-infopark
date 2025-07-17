import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Button, Chip, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../constants";
import { updateDay } from "../redux/dayListSlice";
import useFetch from "../useFetch";

export default function Daylist() {
  const {
    data: days,
    loading,
    error,
  } = useFetch(BASE_URL + "matches?distinct=1");
  let dayCount: number = 0;
  const containerRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const [selectedDay, setSelectedDay] = useState<null | string>(null);
  useEffect(() => {
    if (days) {
      dispatch(updateDay(days[0]));
      setSelectedDay(days[0]);
    }
  }, [days]);

  const handleClick = (day: string) => {
    setSelectedDay(day);
    dispatch(updateDay(day));
  };

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -100, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 100, behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        background: "#1a1a2e",
        padding: "8px",
        borderRadius: "12px",
        maxWidth: "80%",
        margin: "auto",
      }}
    >
      <Button onClick={scrollLeft} sx={{ minWidth: 0, color: "white" }}>
        <ChevronLeft />
      </Button>

      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          padding: "0 8px",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {loading && <Typography> its loading.................</Typography>}
        {error && <Typography> its error.................</Typography>}

        {days &&
          days.map((day: any) => {
            dayCount++;
            return (
              <Chip
                key={day}
                label={`day ${dayCount}`}
                onClick={() => handleClick(day)}
                sx={{
                  backgroundColor: selectedDay === day ? "#7b2cbf" : "#333",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "16px",
                  minWidth: "70px",
                  justifyContent: "center",
                  cursor: "pointer",
                  ":hover": {
                    backgroundColor:
                      selectedDay === day ? "#7b2cbf9A" : "#7b2cbf30",
                  },
                }}
              />
            );
          })}
      </Box>

      <Button onClick={scrollRight} sx={{ minWidth: 0, color: "white" }}>
        <ChevronRight />
      </Button>
    </Box>
  );
}
