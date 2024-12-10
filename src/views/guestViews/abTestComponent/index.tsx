'use client';
import React from 'react';
import View1 from './view1';
import View2 from './view2';

const ABTest = ({ group }: { group: string }) => {
  return <div>{group === 'A' ? <View1 group={group} /> : <View2 group={group} />}</div>;
};

export default ABTest;
