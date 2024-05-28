import Box from '@mui/material/Box';
import { FormikErrors, FormikTouched } from 'formik';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { MainMakeSure, Step7MainBox, Step7UploadImagBox } from './LastStepPromise.styled';
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
};

const WorkerPhotosWithoutFilterNew = ({
  name,
  value,
  setValue,
  setFieldTouched,
  errors,
  accept,
  touched,
  modelDetails
}: UploadPhotoWithoutFilter) => {
  return (
    <>
      <Box
        sx={{
          textAlign: 'center',
          marginTop: 4,
          gap: 4,
          color: 'text.secondary'
        }}
      >
        <UINewTypography variant="h2">
          <FormattedMessage id="PleaseUploadYourDocuments" />
        </UINewTypography>
      </Box>
      <Step7MainBox>
        <Step7UploadImagBox>
          <Box display="flex" flexDirection="column" alignItems="center" gap={3} alignSelf=" stretch">
            <UINewTypography variant="h6">
              <FormattedMessage id="ID" />
            </UINewTypography>
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

            <MainMakeSure>
              <Box>
                <UINewTypography variant="bodySemiBold" color="#86838A">
                  <FormattedMessage id="MakeSureToFollowThese" />
                </UINewTypography>
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
                      }
                    }}
                  >
                    <ListItem sx={{ display: 'list-item' }}>
                      <UINewTypography variant="bodyRegular" sx={{ lineHeight: '24px', color: '#86838A' }}>
                        <FormattedMessage id="MaximumFileSize" />{' '}
                        <span style={{ color: '#E9E8EB' }}>
                          <FormattedMessage id="15MB" />
                        </span>
                      </UINewTypography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                      <UINewTypography variant="bodyRegular" sx={{ lineHeight: '24px', color: '#86838A' }}>
                        <FormattedMessage id="SupportedFormats" />{' '}
                        <span style={{ color: '#E9E8EB' }}>
                          <FormattedMessage id="JPEGJPG" />
                        </span>
                      </UINewTypography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                      <UINewTypography variant="bodyRegular" sx={{ lineHeight: '24px', color: '#86838A' }}>
                        <FormattedMessage id="MaximumResolution" />{' '}
                        <span style={{ color: '#E9E8EB' }}>
                          <FormattedMessage id="640px480px" />
                        </span>
                      </UINewTypography>
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </MainMakeSure>
          </Box>
        </Step7UploadImagBox>
      </Step7MainBox>
    </>
  );
};
export default WorkerPhotosWithoutFilterNew;
