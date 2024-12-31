// import { cookies } from 'next/headers';
// import ABTest from 'views/guestViews/abTestComponent';
import { Box } from '@mui/material';
import PreSignUpWeb from 'views/guestViews/abTestComponent/preSignUpWeb';

const abTest = () => {
  // const group = cookies().get('ab-group')?.value as string;
  return (
    <Box width={'100%'}>
      {/* <ABTest group={group} /> */}
      <PreSignUpWeb />
    </Box>
  );
};

export default abTest;
