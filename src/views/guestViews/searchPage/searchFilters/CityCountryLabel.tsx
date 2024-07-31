import Box from '@mui/material/Box';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import { FormattedMessage } from 'react-intl';

const CityCountryLabel = ({ label, type }: { label: string | number; type: string }) => {
  return (
    <Box display="flex" gap={1}>
      {type === 'Country' && <RoomOutlinedIcon sx={{ color: 'secondary.200' }} />}
      {!label && (type === 'Country' ? <FormattedMessage id="Country" /> : <FormattedMessage id="City" />)}
    </Box>
  );
};

export default CityCountryLabel;
