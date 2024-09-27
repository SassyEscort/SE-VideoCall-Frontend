'use client';
import { DialogContent } from '@mui/material';
import React from 'react';
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
  ModelImageBoxContainer,
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
import { ModelListing } from 'services/adminModel/adminModel.services';

const ApproveRejectPendingModel = ({
  open,
  onClose,
  modelDetails
}: {
  open: boolean;
  onClose: () => void;
  modelDetails: ModelListing | undefined;
}) => {
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
              <ModelImageBoxContainer />
              <ModelDetailsInnerBoxContainer>
                <ModelDetailsText sx={{ color: 'black.main' }}>{modelDetails?.name}</ModelDetailsText>
                <ModelDetailsText sx={{ color: '#666666' }}>{modelDetails?.email}</ModelDetailsText>
                <ModelDetailsText sx={{ color: '#666666' }}>{modelDetails?.created_at}</ModelDetailsText>
              </ModelDetailsInnerBoxContainer>
            </ModelDetailsMainBoxContainer>

            <Box>
              <ModelBioText sx={{ color: 'black.main' }}>
                Hi, im your LadyHeart❤️.. i am very friendl, open minded with a deep respect to others
              </ModelBioText>
            </Box>

            <ModelDetailsBox>
              <ModelBioText sx={{ color: 'black.main' }}>34</ModelBioText>
              <DividerContainer orientation="vertical" flexItem />
              <ModelBioText sx={{ color: 'black.main' }}>British</ModelBioText>
              <DividerContainer orientation="vertical" flexItem />
              <ModelBioText sx={{ color: 'black.main' }}>English</ModelBioText>
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

            <Box>
              <ViewDetailsText sx={{ color: '#FF68C0' }}>View details</ViewDetailsText>
            </Box>
          </ModelInnerBoxContainer>
        </ModelMainBoxContainer>
      </DialogContent>
    </DialogContentMain>
  );
};

export default ApproveRejectPendingModel;
