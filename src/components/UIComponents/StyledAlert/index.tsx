'use client';

import styled from '@emotion/styled';
import { Alert } from '@mui/material';

const StyledAlert = styled(Alert)(() => ({
  display: 'flex',
  alignItems: 'start',
  padding: '8px 16px'
}));

export default StyledAlert;
