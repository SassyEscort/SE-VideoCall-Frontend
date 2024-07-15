import { styled } from '@mui/material';
import Box from '@mui/system/Box';

interface StatusBoxProps {
  status: string;
}

export const NewStatusBox = styled(Box)<StatusBoxProps>(({ status }) => {
  let borderColor, backgroundColor;

  switch (status) {
    case 'Pending':
      borderColor = '#FFE500';
      backgroundColor = '#FFE5001F';
      break;
    case 'Approved':
      borderColor = '#79E028';
      backgroundColor = '#15250A';
      break;
    case 'Rejected':
      borderColor = '#FF5959';
      backgroundColor = '#2F0909';
      break;
    default:
      borderColor = 'none';
      backgroundColor = 'transparent';
  }

  return {
    padding: '4px 12px',
    borderRadius: '48px',
    display: 'flex',
    alignItems: 'center',
    minWidth: '87px',
    textAlign: 'center',
    height: '100%',
    minHeight: '25px',
    border: `1px solid ${borderColor}`,
    backgroundColor: backgroundColor,
    justifyContent: 'center'
  };
});
