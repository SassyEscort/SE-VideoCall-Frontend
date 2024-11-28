'use client';

import { Button } from '@mui/material';
import { useState } from 'react';

const CounterContainer = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      XXXXXXXXXXXXXXXXXXX
      <Button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </Button>
      {count}
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </Button>
    </>
  );
};

export default CounterContainer;
