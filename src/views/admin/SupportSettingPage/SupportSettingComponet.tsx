import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Formik } from 'formik';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import { AdminSettingData } from './SupportSettingPageContainer';
import * as Yup from 'yup';

const SupportSettingComponet = ({
  supportSettingData,
  handleUpdate,
  loadingButtons,
  UpdatePermission
}: {
  supportSettingData: AdminSettingData[];
  handleUpdate: (item: AdminSettingData) => void;
  loadingButtons: { [key: string]: boolean };
  UpdatePermission: boolean;
}) => {
  const validationSchema = Yup.array().of(
    Yup.object().shape({
      content: Yup.string().required('Content is required')
    })
  );

  return (
    <Formik initialValues={supportSettingData} enableReinitialize validationSchema={validationSchema} onSubmit={(values) => {}}>
      {({ values, errors, touched, handleChange, handleBlur, setFieldValue }) => {
        const handleUpdateValues = (value: string, index: number) => {
          setFieldValue(`${[index]}.content`, value);
        };

        return (
          <Box component="form" sx={{ maxWidth: '1300px' }}>
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2 }}
              sx={{ padding: { sm: '0 90px ', lg: '0 90px 0 0', xs: '0 20px' } }}
            >
              {values &&
                values.map((item, index) => (
                  <>
                    <Grid item xs={UpdatePermission ? 10 : 12} md={UpdatePermission ? 4 : 6} key={item.id}>
                      <Typography variant="h6" gutterBottom>
                        {item.label}
                      </Typography>
                      <TextField
                        id={item.label}
                        name={`${index}.content`}
                        type="string"
                        disabled={!UpdatePermission}
                        value={item.content}
                        onChange={(e) => handleUpdateValues(e.target.value, index)}
                        onBlur={handleBlur}
                        error={touched[index]?.content && Boolean(errors[index]?.content)}
                        helperText={touched[index]?.content && errors[index]?.content ? `${item.label} is required` : null}
                        sx={{ width: '100%', maxWidth: '500px' }}
                      />
                    </Grid>
                    {UpdatePermission && (
                      <Grid item xs={2} md={2} sx={{ alignContent: 'end', marginBottom: '13px' }}>
                        <LoadingButton
                          loading={loadingButtons[item.id] || false}
                          size="large"
                          onClick={() => handleUpdate(item)}
                          variant="contained"
                          color="primary"
                        >
                          Save
                        </LoadingButton>
                      </Grid>
                    )}
                  </>
                ))}
            </Grid>
          </Box>
        );
      }}
    </Formik>
  );
};

export default SupportSettingComponet;
