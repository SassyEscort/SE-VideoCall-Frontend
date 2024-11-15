'use client';
import DialogContentMain from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Box from "@mui/material/Box"

const CallingRoomModel = ({ open }: { open: boolean }) => {

  return (
    <DialogContentMain open={open} fullWidth>
      <DialogContent sx={{ p: 0 }}>
        <Box id="zego-room"></Box>
      </DialogContent>
    </DialogContentMain>
  );
};

export default CallingRoomModel;
