'use client';
import { CircularProgress, Divider, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useCallback, useEffect, useState } from 'react';
import {
  CallAgainBox,
  CallHistoryBox,
  CallHistoryBoxContainer,
  CallHistoryCreditBox,
  CallHistoryMainContainer,
  CallHistoryName,
  CallHistoryPaginationContainer,
  CallHistoryText,
  CreditUsedBox,
  DividerContainer,
  FirstBoxContainer,
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
  UIThemeShadowButtonContainer,
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
import { useCallFeatureContext } from '../../../../context/CallFeatureContext';
import { CallingService } from 'services/calling/calling.services';

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
  const [guestData, setguestData] = useState(0);
  const [isCreditAvailable, setIsCreditAvailable] = useState(false);
  const [callTime, setCallTime] = useState(0);
  const { handleCallInitiate, call, isCallEnded } = useCallFeatureContext();
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

  useEffect(() => {
    const getCometChatInfo = async () => {
      if (guestData && token.token) {
        const getInfo = await CallingService.getCometChatInfo(guestData, token.token);
        if (getInfo?.data?.time_unit === 'minutes' && getInfo?.data?.available_call_duration >= 3) {
          const durationInSeconds = moment.duration(getInfo?.data?.available_call_duration, 'minutes').asMilliseconds();
          setCallTime(durationInSeconds);
          setIsCreditAvailable(true);
        }
      }
    };
    getCometChatInfo();
  }, [guestData, token, call, isCallEnded]);

  const formatDuration = (duration: string) => {
    const callDuration = moment.duration(duration);
    const hours = Math.floor(callDuration.asHours());
    const minutes = callDuration.minutes();
    const seconds = callDuration.seconds();
    let message = '';

    if (hours > 0) {
      message += `${hours} hour`;
    }
    if (minutes > 0) {
      if (hours > 0) {
        message += ', ';
      }
      message += `${minutes} min`;
    }
    if (seconds > 0) {
      if (hours > 0 || minutes > 0) {
        message += ', ';
      }
      message += `${seconds} sec`;
    }

    return message;
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
              {callHistoryData && callHistoryData?.data?.call_logs.length > 0 ? (
                callHistoryData?.data?.call_logs.map((list, index) => (
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
                                  {list.credits_used} credits/min
                                </UINewTypography>
                              </CallHistoryCreditBox>
                            </SecondSubFirstPartSecondBox>
                          </SecondSubFirstPartBox>
                          {!isSmDown && (
                            <SecondSubFirstPartThiredBox marginRight={{ sm: '32px' }}>
                              <FirstTextContainer color="text.primary" whiteSpace="nowrap">
                                <FormattedMessage id="Duration" />
                                {list.duration && formatDuration(list.duration)}
                              </FirstTextContainer>
                              <CreditUsedBox>
                                <FirstTextContainer color="text.primary" whiteSpace="nowrap">
                                  <FormattedMessage id="CreditsUsed" />
                                </FirstTextContainer>
                                <SecondSubFirstPartThiredBoxText>
                                  <ImgBoxContainer src="/images/workercards/dollar-img.png" />
                                  <FirstTextContainer color="text.primary">{list.credits_used}</FirstTextContainer>
                                </SecondSubFirstPartThiredBoxText>
                              </CreditUsedBox>
                              <CreditUsedBox>
                                <FirstTextContainer color="text.primary" whiteSpace="nowrap">
                                  <FormattedMessage id="Date" /> :
                                </FirstTextContainer>
                                <SecondSubFirstPartThiredBoxText>
                                  <CallHistoryBox>
                                    <FirstTextContainer color="text.primary" sx={{ textWrap: 'nowrap' }}>
                                      {moment(list.created_at).format('LT')},
                                    </FirstTextContainer>
                                    <FirstTextContainer color="text.primary" sx={{ textWrap: 'nowrap' }}>
                                      {moment(list.created_at).format('DD MMMM YYYY')}
                                    </FirstTextContainer>
                                  </CallHistoryBox>
                                </SecondSubFirstPartThiredBoxText>
                              </CreditUsedBox>
                            </SecondSubFirstPartThiredBox>
                          )}
                        </SecondSubFirstBox>
                        {isSmDown && (
                          <SecondSubFirstPartThiredBox gap="8px !important">
                            <UINewTypography variant="buttonLargeMenu" color="text.primary" whiteSpace="nowrap">
                              <FormattedMessage id="Duration" />
                              {list.duration && formatDuration(list.duration)}
                            </UINewTypography>
                            <CreditUsedBox>
                              <UINewTypography variant="buttonLargeMenu" color="text.primary" whiteSpace="nowrap">
                                <FormattedMessage id="CreditsUsed" />
                              </UINewTypography>
                              <SecondSubFirstPartThiredBoxText>
                                <ImgBoxContainer src="/images/workercards/dollar-img.png" />
                                <UINewTypography variant="buttonLargeMenu" color="text.primary">
                                  {list.credits_used}
                                </UINewTypography>
                              </SecondSubFirstPartThiredBoxText>
                            </CreditUsedBox>

                            <Box>
                              <UINewTypography variant="buttonLargeMenu" color="text.primary" whiteSpace="nowrap">
                                <FormattedMessage id="Date" />
                              </UINewTypography>
                              <UINewTypography variant="buttonLargeMenu" color="text.primary" whiteSpace="nowrap">
                                {moment(list.created_at).format('LT')}, {moment(list.created_at).format('DD MMMM YYYY')}
                              </UINewTypography>
                            </Box>
                          </SecondSubFirstPartThiredBox>
                        )}
                        <CallAgainBox>
                          <UIThemeShadowButtonContainer
                            variant="contained"
                            onClick={() => {
                              handleCallInitiate(list.model_id, isCreditAvailable, callTime, list.name, list.link ?? '');
                              setguestData(list.model_id);
                            }}
                          >
                            <Box sx={{ display: 'flex', gap: 1.25 }}>
                              <SecImgBoxContainer src="/images/home-connect-instantly-img.png" />
                              <Box sx={{ whiteSpace: 'nowrap' }}>
                                <UINewTypography variant="bodySemiBold" color="white.main">
                                  <FormattedMessage id="CallAgain" />
                                </UINewTypography>
                              </Box>
                            </Box>
                          </UIThemeShadowButtonContainer>
                        </CallAgainBox>
                      </SecondSubTextMainContainer>
                    </SecondSubContainer>

                    <DividerContainer orientation="horizontal" flexItem />
                  </SecondContainer>
                ))
              ) : (
                <FirstBoxContainer>
                  <UINewTypography variant="h6">
                    <FormattedMessage id="DataNotFound" />
                  </UINewTypography>
                </FirstBoxContainer>
              )}
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
