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
  RatingAndButtonBoxContainer,
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
import { FormattedMessage } from 'react-intl';
import { UITheme2Pagination } from 'components/UIComponents/PaginationV2/Pagination.styled';
import { CallHistoryDetails, CallHistoryPageDetailsRes } from 'services/callHistory/types';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { CallHistoryService } from 'services/callHistory/callHistory.services';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import moment from 'moment';
import { BillingPaginationBox } from '../BillingHistory/BillingHistory.styled';
import PaginationInWords from 'components/UIComponents/PaginationINWords';
import { LoaderBox } from '../Credites/Credits.styled';
import { UIStyledLoadingButtonShadowCallHistory } from 'components/UIComponents/StyleLoadingButtonshadow';
import { useRouter } from 'next/navigation';
import CallHistoryRatingModel from './CalllHistoryRatingModel';
import StartRating from 'components/UIComponents/StartRating';
import theme from 'themes/theme';

export type CallHistoryPaginationType = {
  page: number;
  limit: number;
  offset: number;
};

const CallHistory = () => {
  const router = useRouter();
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [callHistoryData, setCallHistoryData] = useState<CallHistoryPageDetailsRes>();
  const [total_rows, setTotalRows] = useState(0);
  const [isLoadingCall, setIsLoading] = useState(false);
  const [isLoadingDetail, setIsLoadingDetails] = useState(false);
  const [isShowRatingModel, setIsShowRatingModel] = useState(false);
  const [logDetails, setCallLogDetails] = useState<CallHistoryDetails>({} as CallHistoryDetails);

  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

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

  const fetchCallHistoryDetails = async () => {
    try {
      if (token.token) {
        setIsLoading(true);
        const objectParams = {
          page: filters.page,
          limit: filters.limit,
          offset: filters.offset
        };
        const data = await CallHistoryService.getCallHistoryDetails(token.token, objectParams);
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
  useEffect(() => {
    fetchCallHistoryDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleVideoCall = (list: CallHistoryDetails) => {
    if (list.user_name) {
      setIsLoadingDetails(true);
      router.push(`/details/${list.user_name}`);
      setIsLoadingDetails(false);
    }
  };

  const handleRatingModel = (list: CallHistoryDetails) => {
    if (list.call_log_id) {
      setCallLogDetails(list);
      setIsShowRatingModel(true);
    }
  };

  const handleRatingModelClose = () => {
    setCallLogDetails({} as CallHistoryDetails);
    setIsShowRatingModel(false);
    fetchCallHistoryDetails();
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
          {isLoadingCall ? (
            <LoaderBox>
              <CircularProgress />
            </LoaderBox>
          ) : (
            <>
              {callHistoryData && callHistoryData?.data?.call_logs.length > 0 ? (
                callHistoryData?.data?.call_logs?.map((list, index) => (
                  <SecondContainer key={index}>
                    <SecondSubContainer>
                      <SecondSubTextMainContainer>
                        {isSmDown && (
                          <CallHistoryBox>
                            <FirstTextContainer color="secondary.700" sx={{ textWrap: 'nowrap' }}>
                              {moment(list?.created_at).format('LT')},
                            </FirstTextContainer>
                            <FirstTextContainer color="secondary.700" sx={{ textWrap: 'nowrap' }}>
                              {moment(list?.created_at).format('DD MMMM YYYY')}
                            </FirstTextContainer>
                          </CallHistoryBox>
                        )}
                        <SecondSubFirstBox>
                          <SecondSubFirstPartBox>
                            <WorkerImg src={list?.link ? list?.link : ''} width={80} height={80} />
                            <SecondSubFirstPartSecondBox>
                              <SecondSubFirstPartSecondBoxFirstText>
                                <CallHistoryName variant="h6" color="white.main" whiteSpace="nowrap">
                                  {list?.name}
                                </CallHistoryName>
                                <SecondSubFirstPartSecondBoxSecText>
                                  <SecTextContainer color="text.primary">{calculateAge(list?.dob)}</SecTextContainer>
                                  <Divider orientation="vertical" flexItem sx={{ borderColor: 'text.primary' }} />
                                  <SecTextContainer color="text.primary">
                                    {list?.languages &&
                                      list?.languages
                                        .filter((item) => item?.language_name)
                                        .map((item) => item?.language_name)
                                        .join(', ')}
                                  </SecTextContainer>
                                </SecondSubFirstPartSecondBoxSecText>
                              </SecondSubFirstPartSecondBoxFirstText>
                              {isSmUp && (
                                <CallHistoryCreditBox>
                                  <ImgBoxContainer src="/images/workercards/dollar-img.avif" alt="doller_icon" />
                                  <UINewTypography variant="captionLargeBold" color="text.secondary">
                                    {list.credits_per_minute} <FormattedMessage id="CreditsMin" />
                                  </UINewTypography>
                                </CallHistoryCreditBox>
                              )}
                            </SecondSubFirstPartSecondBox>
                          </SecondSubFirstPartBox>
                          <SecondSubFirstPartThiredBox marginRight={{ sm: '32px' }}>
                            {isSmUp && (
                              <CallHistoryBox>
                                <FirstTextContainer color="secondary.700" sx={{ textWrap: 'nowrap' }}>
                                  {moment(list?.created_at).format('LT')},
                                </FirstTextContainer>
                                <FirstTextContainer color="secondary.700" sx={{ textWrap: 'nowrap' }}>
                                  {moment(list?.created_at).format('DD MMMM YYYY')}
                                </FirstTextContainer>
                              </CallHistoryBox>
                            )}
                            {isSmDown && (
                              <CallHistoryCreditBox>
                                <ImgBoxContainer src="/images/workercards/dollar-img.avif" alt="doller_icon" />
                                <UINewTypography variant="captionLargeBold" color="text.secondary">
                                  {list.credits_per_minute} <FormattedMessage id="CreditsMin" />
                                </UINewTypography>
                              </CallHistoryCreditBox>
                            )}
                            <FirstTextContainer color="text.primary" whiteSpace="nowrap">
                              <FormattedMessage id="Duration" />
                              {(list?.duration && formatDuration(list?.duration)) || 0}
                            </FirstTextContainer>
                            <CreditUsedBox>
                              <FirstTextContainer color="text.primary" whiteSpace="nowrap">
                                <FormattedMessage id="CreditsUsed" />
                              </FirstTextContainer>
                              <SecondSubFirstPartThiredBoxText>
                                <ImgBoxContainer src="/images/workercards/dollar-img.avif" alt="doller_icon" />
                                <FirstTextContainer color="text.primary">{list?.credits_used}</FirstTextContainer>
                              </SecondSubFirstPartThiredBoxText>
                            </CreditUsedBox>
                          </SecondSubFirstPartThiredBox>
                        </SecondSubFirstBox>

                        <RatingAndButtonBoxContainer>
                          <CallAgainBox>
                            <UIStyledLoadingButtonShadowCallHistory
                              loading={isLoadingDetail}
                              variant="contained"
                              onClick={() => {
                                handleVideoCall(list);
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
                            </UIStyledLoadingButtonShadowCallHistory>
                          </CallAgainBox>
                          {list?.rating ? (
                            <StartRating value={list?.rating || 0} isReadOnly={true} />
                          ) : (
                            <UINewTypography
                              variant="bodySemiBold"
                              color="primary.400"
                              onClick={() => handleRatingModel(list)}
                              sx={{ cursor: 'pointer' }}
                            >
                              <FormattedMessage id="RateYourVideoCall" />
                            </UINewTypography>
                          )}
                        </RatingAndButtonBoxContainer>
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
                  isCall={true}
                />
              </BillingPaginationBox>
            )}
          </CallHistoryPaginationContainer>
        )}
      </CallHistoryBoxContainer>
      <CallHistoryRatingModel open={isShowRatingModel} onClose={handleRatingModelClose} callLogId={logDetails.call_log_id} />
    </MainLayoutNav>
  );
};

export default CallHistory;
