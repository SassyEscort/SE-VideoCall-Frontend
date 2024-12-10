import { cookies } from 'next/headers';
import ABTest from 'views/guestViews/abTestComponent';

const abTest = () => {
  const group = cookies().get('ab-group')?.value as string;
  console.log(group, ':::::::::::::::::::group');
  return (
    <div>
      <ABTest group={group} />
    </div>
  );
};

export default abTest;
