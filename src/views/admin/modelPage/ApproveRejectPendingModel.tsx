'use client';
import { DialogContent } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import {
  ApproveButton,
  ApprovedButtonContainer,
  ApproveMainBoxContainer,
  ButtonBoxContainer,
  ButtonText,
  ButtonTextContainer,
  CallDurationText,
  DeclineButton,
  DialogContentMain,
  DialogTitleBox,
  DividerContainer,
  DurationText,
  ModelBioText,
  ModelDetailsBox,
  ModelDetailsInnerBoxContainer,
  ModelDetailsMainBoxContainer,
  ModelDetailsText,
  ModelInnerBoxContainer,
  ModelMainBoxContainer,
  PendingButtonContainer,
  RejectedButtonContainer,
  RejectedModelInnerBox,
  RejectedText,
  TotalCallDurationBoxContainer,
  ViewDetailsText
} from './ApproveRejectPendingModel.styled';
import Box from '@mui/system/Box';
import { MODEL_ACTION } from 'constants/profileConstants';
import { adminModelServices, ModelListing } from 'services/adminModel/adminModel.services';
import { ModelDetailsRes } from 'services/adminModel/types';
import { ErrorMessage } from 'constants/common.constants';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { toast } from 'react-toastify';
import { calculateAge } from 'constants/adminAgeCalculate';
import StyledAvatar from 'components/UIComponents/StyledAvatar';
import Link from 'next/link';
import moment from 'moment';

const ApproveRejectPendingModel = ({
  open,
  onClose,
  modelDetails
}: {
  open: boolean;
  onClose: () => void;
  modelDetails: ModelListing | undefined;
}) => {
  const [modelData, setModelData] = useState<ModelDetailsRes>();
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      if (data && token) {
        setToken({ id: data.id, token: data.token });
      }
    };

    userToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchModelData = useCallback(async () => {
    try {
      if (token.token && modelDetails) {
        const data = await adminModelServices.getModelDetails(token.token, Number(modelDetails.id));

        if (data) {
          setModelData(data);
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  }, [token.token, modelDetails]);

  useEffect(() => {
    fetchModelData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.token, modelDetails]);

  const photo = modelData?.data?.photos?.filter((item) => item.favourite === 1 && item.link)[0]?.link;

  return (
    <DialogContentMain open={open} onClose={onClose}>
      <DialogTitleBox
        sx={{
          '&.MuiTypography-root': {
            padding: '0px 0px'
          }
        }}
      ></DialogTitleBox>

      <DialogContent sx={{ p: 0 }}>
        <ModelMainBoxContainer>
          {modelDetails?.profile_status === MODEL_ACTION.APPROVE && (
            <ApprovedButtonContainer>
              <ButtonTextContainer color="#00B69B">Approved</ButtonTextContainer>
            </ApprovedButtonContainer>
          )}

          {modelDetails?.profile_status === MODEL_ACTION.REJECT && (
            <RejectedButtonContainer>
              <ButtonTextContainer color="#EF3826">Rejected</ButtonTextContainer>
            </RejectedButtonContainer>
          )}

          {modelDetails?.profile_status === MODEL_ACTION.PENDING && (
            <PendingButtonContainer>
              <ButtonTextContainer color="#FFA756">Pending</ButtonTextContainer>
            </PendingButtonContainer>
          )}

          <ModelInnerBoxContainer>
            <ModelDetailsMainBoxContainer>
              <StyledAvatar image={photo ?? ''} color="secondary.light" />
              <ModelDetailsInnerBoxContainer>
                <ModelDetailsText sx={{ color: 'black.main' }}>{modelDetails?.name}</ModelDetailsText>
                <ModelDetailsText sx={{ color: '#666666' }}>{modelDetails?.email}</ModelDetailsText>
                <ModelDetailsText sx={{ color: '#666666' }}>{moment(modelDetails?.created_at).format('ll')}</ModelDetailsText>
              </ModelDetailsInnerBoxContainer>
            </ModelDetailsMainBoxContainer>

            <Box>
              <ModelBioText sx={{ color: 'black.main' }}>{modelData?.data.bio}</ModelBioText>
            </Box>

            <ModelDetailsBox>
              <ModelBioText sx={{ color: 'black.main' }}>{modelData ? calculateAge(modelData?.data?.dob) : '-'}</ModelBioText>
              <DividerContainer orientation="vertical" flexItem />
              <ModelBioText sx={{ color: 'black.main' }}>{modelData?.data.country.name}</ModelBioText>
              <DividerContainer orientation="vertical" flexItem />
              <ModelBioText sx={{ color: 'black.main' }}>
                {' '}
                {modelData?.data?.languages &&
                  modelData?.data?.languages
                    .filter((item) => item?.language_name)
                    .map((item) => item?.language_name)
                    .join(', ')}
              </ModelBioText>
            </ModelDetailsBox>

            {modelDetails?.profile_status === MODEL_ACTION.APPROVE && (
              <ApproveMainBoxContainer>
                <TotalCallDurationBoxContainer>
                  <DurationText sx={{ color: '#202224' }}>48mins</DurationText>
                  <CallDurationText sx={{ color: '#202224' }}>Total call duration</CallDurationText>
                </TotalCallDurationBoxContainer>

                <TotalCallDurationBoxContainer>
                  <DurationText sx={{ color: '#202224' }}>23</DurationText>
                  <CallDurationText sx={{ color: '#202224' }}>No. of calls</CallDurationText>
                </TotalCallDurationBoxContainer>

                <TotalCallDurationBoxContainer>
                  <DurationText sx={{ color: '#202224' }}>243$</DurationText>
                  <CallDurationText sx={{ color: '#202224' }}>Earnings</CallDurationText>
                </TotalCallDurationBoxContainer>
              </ApproveMainBoxContainer>
            )}

            {modelDetails?.profile_status === MODEL_ACTION.PENDING && (
              <ModelInnerBoxContainer>
                <ApproveMainBoxContainer>
                  <TotalCallDurationBoxContainer>
                    <DurationText sx={{ color: '#202224' }}>4</DurationText>
                    <CallDurationText sx={{ color: '#202224' }}>Photos uploaded</CallDurationText>
                  </TotalCallDurationBoxContainer>

                  <TotalCallDurationBoxContainer>
                    <DurationText sx={{ color: '#202224' }}>4</DurationText>
                    <CallDurationText sx={{ color: '#202224' }}>Documents uploaded</CallDurationText>
                  </TotalCallDurationBoxContainer>
                </ApproveMainBoxContainer>

                <ButtonBoxContainer>
                  <ApproveButton>
                    <ButtonText sx={{ color: 'white.main' }}>Approve</ButtonText>
                  </ApproveButton>
                  <DeclineButton>
                    <ButtonText sx={{ color: 'white.main' }}>Decline</ButtonText>
                  </DeclineButton>
                </ButtonBoxContainer>
              </ModelInnerBoxContainer>
            )}

            {modelDetails?.profile_status === MODEL_ACTION.REJECT && (
              <ModelInnerBoxContainer>
                <ApproveMainBoxContainer>
                  <TotalCallDurationBoxContainer>
                    <DurationText sx={{ color: '#202224' }}>4</DurationText>
                    <CallDurationText sx={{ color: '#202224' }}>Photos uploaded</CallDurationText>
                  </TotalCallDurationBoxContainer>

                  <TotalCallDurationBoxContainer>
                    <DurationText sx={{ color: '#202224' }}>4</DurationText>
                    <CallDurationText sx={{ color: '#202224' }}>Documents uploaded</CallDurationText>
                  </TotalCallDurationBoxContainer>
                </ApproveMainBoxContainer>

                <RejectedModelInnerBox>
                  <RejectedText sx={{ color: 'black.main' }}>Rejected on: Aug 23, 2024</RejectedText>
                  <RejectedText sx={{ color: 'black.main' }}>Remark: Documents not correct.</RejectedText>
                </RejectedModelInnerBox>
              </ModelInnerBoxContainer>
            )}

            <Link href={`/admin/model/details/${modelDetails?.id}`}>
              <ViewDetailsText sx={{ color: '#FF68C0' }}>View details</ViewDetailsText>
            </Link>
          </ModelInnerBoxContainer>
        </ModelMainBoxContainer>
      </DialogContent>
    </DialogContentMain>
  );
};

export default ApproveRejectPendingModel;
