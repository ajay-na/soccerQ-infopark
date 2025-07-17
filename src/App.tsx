import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import TopNavBar from "./components/TopNavbar";
import MatchDetail from "./pages/matchDetailPage";
import MatchPage from "./pages/matchPaget";
import PlayerPage from "./pages/playerPage";
import TablePage from "./pages/tablePage";

function App() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMobile) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2>This site is only available on mobile devices.</h2>
      </div>
    );
  }

  return (
    <div style={{ position: "relative" }}>
      <Box sx={{ backgroundColor: "#050312" }}>
        <TopNavBar />
        <Box>
          <Routes>
            <Route path="/" element={<MatchPage />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/stats" element={<PlayerPage />} />
            <Route path="/match" element={<MatchDetail />} />
          </Routes>
        </Box>
      </Box>
      <Navbar />
    </div>
  );
}

export default App;
