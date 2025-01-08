// import { cookies } from 'next/headers';
// import ABTest from 'views/guestViews/abTestComponent';
import { Box } from '@mui/material';
import { ModelListingService } from 'services/modelListing/modelListing.services';
import { ABTestServices } from 'services/abTest/abTest.services';
import { getUserDataServerSide } from 'utils/getSessionData';
import PreSignUpWeb from 'views/guestViews/abTestComponent/preSignUpWeb';
import { KeyPairAndUndefined } from 'types/KeyPair';
import { HOME_PAGE_SIZE } from 'constants/common.constants';

const abTest = async ({ searchParams }: { searchParams: KeyPairAndUndefined }) => {
  // const group = cookies().get('ab-group')?.value as string;
  const session = await getUserDataServerSide();
  const initVal = {
    fromAge: searchParams?.fromAge || '',
    toAge: searchParams?.toAge || '',
    fromPrice: searchParams?.fromPrice || '',
    toPrice: searchParams?.toPrice || '',
    language: searchParams?.language || '',
    isOnline: searchParams?.isOnline || '',
    country: searchParams?.country || '',
    region: searchParams?.region || '',
    sortOrder: searchParams?.sortOrder || '',
    sortField: searchParams?.sortField || '',
    gender: searchParams?.gender || '',
    page: (searchParams?.page && Number(searchParams?.page)) || 1,
    pageSize: HOME_PAGE_SIZE,
    offset: (Number(searchParams?.page ?? 1) - 1) * HOME_PAGE_SIZE || 0,
    email: searchParams?.email || ''
  };

  const modelData = await ModelListingService.getModelListing(initVal, session.token);
  const carousalImages = await ABTestServices.fetchcarouselModelImages();  

  return (
    <Box width={'100%'}>
      {/* <ABTest group={group} /> */}
      <PreSignUpWeb modelData={modelData} params={initVal} carousalImages={carousalImages} />
    </Box>
  );
};

export default abTest;
