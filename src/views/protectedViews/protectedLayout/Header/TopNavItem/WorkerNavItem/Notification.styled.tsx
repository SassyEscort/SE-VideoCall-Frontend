import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const NotificationContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: theme.spacing(1),
  borderTop: "1px solid",
  borderColor: theme.palette.primary[700],
}));
