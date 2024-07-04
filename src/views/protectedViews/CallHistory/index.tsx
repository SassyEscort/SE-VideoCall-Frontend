'use client';
import { CircularProgress, Divider, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import React, { useCallback, useEffect, useState } from 'react';
import {
  CallAgainBox,
  CallHistoryBoxContainer,
  CallHistoryCreditBox,
  CallHistoryMainContainer,
  CallHistoryName,
  CallHistoryPaginationContainer,
  CallHistoryText,
  CreditUsedBox,
  DividerContainer,
  FirstTextContainer,
  ImgBoxContainer,
  SecImgBoxContainer,
  SecTextContainer,
  SecondContainer,
  SecondSubContainer,
  SecondSubFirstBox,
  SecondSubFirstPartBox,
  SecondSubFirstPartSecondBox,
  SecondSubFirstPartSecondBoxFirstText,
  SecondSubFirstPartSecondBoxSecText,
  SecondSubFirstPartThiredBox,
  SecondSubFirstPartThiredBoxText,
  SecondSubTextMainContainer,
  WorkerImg
} from './CallHistory.styled';
import MainLayoutNav from '../protectedLayout';
import UINewTypography from 'components/UIComponents/UINewTypography';
import theme from 'themes/theme';
import { FormattedMessage } from 'react-intl';
import { UITheme2Pagination } from 'components/UIComponents/PaginationV2/Pagination.styled';
import { CallHistoryPageDetailsRes } from 'services/callHistory/types';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { CallHistoryService } from 'services/callHistory/callHistory.services';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import moment from 'moment';
import { BillingPaginationBox } from '../BillingHistory/BillingHistory.styled';
import PaginationInWords from 'components/UIComponents/PaginationINWords';
import { LoaderBox } from '../Credites/Credits.styled';

export type CallHistoryPaginationType = {
  page: number;
  offset: number;
  limit: number;
};

const CallHistory = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down(330));
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [callHistoryData, setCallHistoryData] = useState<CallHistoryPageDetailsRes>();
  const [total_rows, setTotalRows] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [filters, setFilters] = useState<CallHistoryPaginationType>({
    page: 1,
    limit: 20,
    offset: 0
  });

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data.id, token: data.token });
    };

    userToken();
  }, []);

  useEffect(() => {
    const fetchCallHistoryDetails = async () => {
      try {
        if (token.token) {
          setIsLoading(true);
          const data = await CallHistoryService.getCallHistoryDetails(token.token);
          if (data) {
            setCallHistoryData(data);
            setTotalRows(data.data.aggregate.total_rows);
            setIsLoading(false);
          }
        }
      } catch (error) {
        toast.error(ErrorMessage);
      }
    };

    fetchCallHistoryDetails();
  }, [filters.limit, filters.offset, token.token]);

  const scrollToTable = () => {
    const tableElement = document.getElementById('tableSection');
    if (tableElement) {
      tableElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChangeFilter = useCallback((value: CallHistoryPaginationType) => {
    setFilters(value);
  }, []);

  const handleChangePage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      const offset = (value - 1) * filters.limit;
      handleChangeFilter({ ...filters, page: value, offset: offset });
      scrollToTable();
    },
    [filters, handleChangeFilter]
  );

  const calculateAge = (dob: string) => {
    const birthDate = moment(dob);
    const today = moment();
    return today.diff(birthDate, 'years');
  };

  return (
    <MainLayoutNav variant={'worker'} enlargedFooter={true}>
      <CallHistoryBoxContainer>
        <CallHistoryMainContainer>
          <CallHistoryText>
            <UINewTypography variant="h2" color="text.secondary">
              <FormattedMessage id="CallsHistory" />
            </UINewTypography>
          </CallHistoryText>
          {isLoading ? (
            <LoaderBox>
              <CircularProgress />
            </LoaderBox>
          ) : (
            <>
              {callHistoryData?.data?.call_logs.map((list, index) => (
                <SecondContainer key={index}>
                  <SecondSubContainer>
                    <SecondSubTextMainContainer>
                      <SecondSubFirstBox>
                        <SecondSubFirstPartBox>
                          <WorkerImg src={list.link ? list.link : ''} />
                          <SecondSubFirstPartSecondBox>
                            <SecondSubFirstPartSecondBoxFirstText>
                              <CallHistoryName variant="h6" color="white.main" whiteSpace="nowrap">
                                {list.name}
                              </CallHistoryName>
                              <SecondSubFirstPartSecondBoxSecText>
                                <SecTextContainer color="text.primary">{calculateAge(list.dob)}</SecTextContainer>
                                <Divider orientation="vertical" flexItem sx={{ borderColor: 'text.primary' }} />
                                <SecTextContainer color="text.primary">
                                  {list.languages &&
                                    list.languages
                                      .filter((item) => item.language_name)
                                      .map((item) => item.language_name)
                                      .join(', ')}
                                </SecTextContainer>
                              </SecondSubFirstPartSecondBoxSecText>
                            </SecondSubFirstPartSecondBoxFirstText>
                            <CallHistoryCreditBox>
                              <ImgBoxContainer src="/images/workercards/dollar-img.png" />
                              <UINewTypography variant="captionLargeBold" color="text.secondary">
                                {list.credits_used} credits/hr
                              </UINewTypography>
                            </CallHistoryCreditBox>
                          </SecondSubFirstPartSecondBox>
                        </SecondSubFirstPartBox>
                        {!isSmDown && (
                          <SecondSubFirstPartThiredBox marginRight={{ sm: '32px' }}>
                            <FirstTextContainer color="text.primary" whiteSpace="nowrap">
                              Duration: {list.duration && moment(list.duration).format('h:mm:ss a')}
                            </FirstTextContainer>
                            <CreditUsedBox>
                              <FirstTextContainer color="text.primary" whiteSpace="nowrap">
                                Credits used:
                              </FirstTextContainer>
                              <SecondSubFirstPartThiredBoxText>
                                <ImgBoxContainer src="/images/workercards/dollar-img.png" />
                                <FirstTextContainer color="text.primary">{list.credits_used}</FirstTextContainer>
                              </SecondSubFirstPartThiredBoxText>
                            </CreditUsedBox>
                          </SecondSubFirstPartThiredBox>
                        )}
                      </SecondSubFirstBox>
                      {isSmDown && (
                        <SecondSubFirstPartThiredBox gap="8px !important">
                          <UINewTypography variant="buttonLargeMenu" color="text.primary" whiteSpace="nowrap">
                            Duration: {list.duration && moment(list.duration).format('h:mm:ss a')}
                          </UINewTypography>
                          <CreditUsedBox>
                            <UINewTypography variant="buttonLargeMenu" color="text.primary" whiteSpace="nowrap">
                              Credits used:
                            </UINewTypography>
                            <SecondSubFirstPartThiredBoxText>
                              <ImgBoxContainer src="/images/workercards/dollar-img.png" />
                              <UINewTypography variant="buttonLargeMenu" color="text.primary">
                                {list.credits_used}
                              </UINewTypography>
                            </SecondSubFirstPartThiredBoxText>
                          </CreditUsedBox>
                        </SecondSubFirstPartThiredBox>
                      )}
                      <CallAgainBox>
                        <UIThemeShadowButton variant="contained" sx={{ width: '100%', maxWidth: { xs: '363px', sm: '220px' } }}>
                          <Box sx={{ display: 'flex', gap: 1.25 }}>
                            <SecImgBoxContainer src="/images/home-connect-instantly-img.png" />
                            <Box sx={{ whiteSpace: 'nowrap' }}>
                              <UINewTypography variant="bodySemiBold" color="white.main">
                                <FormattedMessage id="CallAgain" />
                              </UINewTypography>
                            </Box>
                          </Box>
                        </UIThemeShadowButton>
                      </CallAgainBox>
                    </SecondSubTextMainContainer>
                  </SecondSubContainer>

                  <DividerContainer orientation="horizontal" flexItem />
                </SecondContainer>
              ))}
            </>
          )}
        </CallHistoryMainContainer>
        {total_rows > 0 && (
          <CallHistoryPaginationContainer>
            {total_rows > 0 && (
              <BillingPaginationBox>
                <UITheme2Pagination
                  page={filters.page}
                  count={total_rows ? Math.ceil(total_rows / filters.limit) : 1}
                  onChange={handleChangePage}
                />
                <PaginationInWords
                  page={filters.page}
                  limit={filters.limit}
                  total_rows={total_rows}
                  offset={filters.offset}
                  isEscort={true}
                />
              </BillingPaginationBox>
            )}
          </CallHistoryPaginationContainer>
        )}
      </CallHistoryBoxContainer>
    </MainLayoutNav>
  );
};

export default CallHistory;
