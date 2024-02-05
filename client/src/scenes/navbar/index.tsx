import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import DashboardIcon from "@mui/icons-material/Dashboard";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb={"0.25rem"} p={"0.5rem 0rem"} color={palette.grey[300]}>
      <FlexBetween gap={"2rem"}>
        <DashboardIcon />
        <Typography>Admin</Typography>
      </FlexBetween>
      <FlexBetween gap={"2rem"}>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to={"/"}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
            onClick={() => setSelected("dashboard")}
          >
            Dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to={"/predictions"}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
            onClick={() => setSelected("predictions")}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
