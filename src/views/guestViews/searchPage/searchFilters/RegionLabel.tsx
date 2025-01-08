import Box from '@mui/material/Box';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import { FormattedMessage } from 'react-intl';

const RegionLabel = ({ label, type }: { label: string | number; type: string }) => {
  return (
    <Box display="flex" gap={1}>
      {type === 'Region' && <RoomOutlinedIcon sx={{ color: 'secondary.200' }} />}
      {!label && type === 'Region' && <FormattedMessage id="Region" defaultMessage="Region" />}
    </Box>
  );
};

export default RegionLabel;
