import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import HeaderStepComponent from "./HeaderStepComponent";

const StepNavItem = () => (
  <>
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white.main",
        pr: "0 !important",
        boxShadow: "none",
        borderBottom: "1px solid",
        borderColor: "secondary.light",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          py: { xs: 1, sm: 2 },
          justifyContent: "space-between",
        }}
      >
        <Box
          component={Link}
          prefetch={false}
          shallow={true}
          href="/"
          height={{ xs: 40, sm: 60 }}
          width={{ xs: 104, sm: 155 }}
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#D52A8E",
          }}
        >
          <Box
            component="img"
            src="/images/LogoLight.svg"
            height={{ xs: 40, sm: 60 }}
          />
        </Box>
        <Box display="flex" gap={2}>
          <HeaderStepComponent />
        </Box>
      </Toolbar>
    </AppBar>
    <Box sx={{ height: { xs: 56, sm: 92 } }}></Box>
  </>
);

export default StepNavItem;
