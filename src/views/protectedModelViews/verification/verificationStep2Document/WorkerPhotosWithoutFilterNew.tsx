import Box from '@mui/material/Box';
import { FormikErrors, FormikTouched } from 'formik';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { MainMakeSure, Step7MainBox, Step7UploadImagBox, StepSecondMainBox, UIRulesHeader } from './LastStepPromise.styled';
import DragAndDropPromiseV2 from 'components/UIComponents/DragAndDropImage/DragAndDropPromiseV2';
import { List, ListItem } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { ModelDetailsResponse } from '../verificationTypes';

export type UploadPhotoWithoutFilter = {
  errors: string | undefined;
  value: File | null;
  setValue: (field: string, value: File | null, shouldValidate?: boolean | undefined) => Promise<void | FormikErrors<unknown>>;
  setFieldTouched: (field: string, val: boolean) => void;
  name: string;
  accept?: string;
  handleNext: () => void;
  touched: FormikTouched<unknown>;
  activeStep: number;
  modelDetails: ModelDetailsResponse | undefined;
  title: string;
};

const WorkerPhotosWithoutFilterNew = ({
  name,
  value,
  setValue,
  setFieldTouched,
  errors,
  accept,
  touched,
  modelDetails,
  title
}: UploadPhotoWithoutFilter) => {
  return (
    <>
      <Step7MainBox>
        <Step7UploadImagBox>
          <StepSecondMainBox>
            <Box display="flex" flexDirection="column" alignItems="center" gap={2.5} alignSelf=" stretch">
              <Box>
                <UINewTypography variant="h6">{title}</UINewTypography>
              </Box>
              <Box
                width="100%"
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <DragAndDropPromiseV2
                  withoutFilterImageTouched={touched}
                  name={name}
                  value={value as File}
                  setValue={setValue}
                  setFieldTouched={setFieldTouched}
                  errors={errors}
                  accept={accept}
                  modelDetails={modelDetails}
                />
              </Box>
            </Box>

            <MainMakeSure>
              <Box>
                <UIRulesHeader variant="bodySemiBold" color="#86838A">
                  <FormattedMessage id="MakeSureToFollowThese" />
                </UIRulesHeader>
                <Box>
                  <List
                    sx={{
                      display: 'flex',
                      alignItems: 'stretch',
                      flexDirection: 'column',
                      listStyleType: 'disc',
                      listStylePosition: 'inside',
                      pb: 0,
                      paddingTop: 0,
                      '& li:last-child': {
                        pb: 0
                      },
                      '& li:nth-of-type(1)': {
                        pb: 0
                      }
                    }}
                  >
                    <ListItem sx={{ display: 'list-item' }}>
                      <UINewTypography variant="bodyRegular" sx={{ lineHeight: '25.6px', color: '#86838A' }}>
                        <FormattedMessage id="MaximumFileSize" />{' '}
                        <span style={{ color: '#E9E8EB' }}>
                          <FormattedMessage id="5MB" />
                        </span>
                      </UINewTypography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                      <UINewTypography variant="bodyRegular" sx={{ lineHeight: '25.6px', color: '#86838A' }}>
                        <FormattedMessage id="SupportedFormats" />{' '}
                        <span style={{ color: '#E9E8EB' }}>
                          <FormattedMessage id="JPEGJPG" />
                        </span>
                      </UINewTypography>
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </MainMakeSure>
          </StepSecondMainBox>
        </Step7UploadImagBox>
      </Step7MainBox>
    </>
  );
};
export default WorkerPhotosWithoutFilterNew;
