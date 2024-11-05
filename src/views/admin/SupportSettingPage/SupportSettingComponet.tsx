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
  handleUpdate
}: {
  supportSettingData: AdminSettingData[];
  handleUpdate: (item: AdminSettingData) => void;
}) => {
  //   const validationSchema = Yup.array().of(
  //     Yup.object().shape({
  //       content: Yup.string().required('Content is required')
  //     })
  //   );

  const validationSchema = Yup.array().of(
    Yup.object().shape({
      content: Yup.string()
        .required('Content is required') // Default required validation
        .test('is-email', 'Enter a valid email', function (value) {
          const { category } = this.parent; // Access sibling fields with this.parent
          if (category === 'email') {
            return Yup.string().email().isValidSync(value); // Check email format if category is email
          }
          return true; // Otherwise, just return true
        })
        .min(2, 'Content must be at least 2 characters')
        .max(500, 'Content cannot exceed 500 characters')
    })
  );

  return (
    <Formik
      initialValues={supportSettingData}
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => {
        const handleUpdateValues = (value: string, index: number) => {
          setFieldValue(`${[index]}.content`, value);
        };

        return (
          <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '1300px' }}>
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2 }}
              sx={{ padding: { sm: '0 90px ', lg: '0 90px 0 0', xs: '0 20px' } }}
            >
              {values &&
                values.map((item, index) => (
                  <>
                    <Grid item xs={10} md={4} key={item.id}>
                      <Typography variant="h6" gutterBottom>
                        {item.label}
                      </Typography>
                      <TextField
                        id={item.label}
                        name={`${index}.content`}
                        type="string"
                        value={item.content}
                        onChange={(e) => handleUpdateValues(e.target.value, index)}
                        onBlur={handleBlur}
                        error={touched[index]?.content && Boolean(errors[index]?.content)}
                        helperText={touched[index]?.content && errors[index]?.content}
                        sx={{ width: '100%', maxWidth: '500px' }}
                      />
                    </Grid>
                    <Grid item xs={2} md={2} sx={{ alignContent: 'end', marginBottom: '13px' }}>
                      <LoadingButton loading={false} size="large" onClick={() => handleUpdate(item)} variant="contained" color="primary">
                        Save
                      </LoadingButton>
                    </Grid>
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
