import { Formik } from 'formik';
import * as Yup from 'yup';
// import useMultipleImageKitUpload from '@/services/hooks/WorkerVerification/useMultipleImageKitUpload';
import Box from '@mui/material/Box';
import { RiArrowLeftLine, RiArrowRightLine } from 'components/common/customRemixIcons';
import StyleButtonV2 from 'components/UIComponents/StyleLoadingButton';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import ModelMultiplePhoto from './ModelMultiplePhoto';
import { UploadBox, UploadMultipleBox } from './UploadMultiplePhoto.styled';

export type WorkerPhotos = {
  id: number;
  photo: string;
  type: string;
  isFavorite: number;
  isHide: number;
  cords?: string;
};

export type ImageUploadPayload = {
  photosURL: string;
  type: string;
  id?: number;
  cords?: string;
  isFavorite?: number;
};

export type VerificationFormStep5TypeV2 = {
  file1: File | string;
  cords1?: string;
  file2: File | string;
  cords2?: string;
  file3: File | string;
  cords3?: string;
  file4: File | string;
  cords4?: string;
  file5: File[] | null;
  cords5?: string[] | null;
  file5Existing: WorkerPhotos[];
  isFavorite?: string;
}; //temp type - remove laterrrrrrrrrrrr

export type VerificationStepUploadType = {
  activeStep: number;
  workerPhotos: WorkerPhotos[];
  handleNext: () => void;
  handlePrevVerificationStep: () => void;
};

const UploadImage = ({ workerPhotos, handleNext, handlePrevVerificationStep }: VerificationStepUploadType) => {
  const initialValuesPerStep: VerificationFormStep5TypeV2 = {
    file1: workerPhotos?.filter((photo) => photo.type === 'file_1')[0]?.photo ?? '',
    cords1: workerPhotos?.filter((photo) => photo.type === 'file_1')[0]?.cords ?? '',
    file2: workerPhotos?.filter((photo) => photo.type === 'file_2')[0]?.photo ?? '',
    cords2: workerPhotos?.filter((photo) => photo.type === 'file_2')[0]?.cords ?? '',
    file3: workerPhotos?.filter((photo) => photo.type === 'file_3')[0]?.photo ?? '',
    cords3: workerPhotos?.filter((photo) => photo.type === 'file_3')[0]?.cords ?? '',
    file4: workerPhotos?.filter((photo) => photo.type === 'file_4')[0]?.photo ?? '',
    cords4: workerPhotos?.filter((photo) => photo.type === 'file_4')[0]?.cords ?? '',
    file5: null as null | File[],
    cords5: null as null | string[],
    file5Existing: workerPhotos?.filter((x) => x.type === 'file_5') || ([] as WorkerPhotos[]),
    isFavorite: workerPhotos?.filter((x) => x.isFavorite === 1)[0]?.type
      ? 'file' + workerPhotos?.filter((x) => x.isFavorite === 1)[0]?.type?.split('_')[1]
      : 'file1'
  };

  //   const mutationMultipleImageUpload = useMultipleImageKitUpload();
  //   const mutationWorkerMultipleImageUpload = usePutWorkerMultipleImageUpload({
  //     workerId: Number(query.id)
  //   });

  const validationSchema = Yup.object().shape({
    file1: Yup.mixed().required(),
    file2: Yup.mixed().required(),
    file3: Yup.mixed().required(),
    file4: Yup.mixed().required()
  });

  //   const handleSubmit = async (values: VerificationFormStep5TypeV2) => {
  //     const allFiles: FileBody[] = [
  //       {
  //         type: 'file_1',
  //         file: typeof values.file1 === 'string' ? [] : ([values.file1] as File[]),
  //         cords: values.cords1,
  //         id: 0,
  //         isFavorite: values.isFavorite === 'file1' ? 1 : 0
  //       },
  //       {
  //         type: 'file_2',
  //         file: typeof values.file2 === 'string' ? [] : ([values.file2] as File[]),
  //         cords: values.cords2,
  //         id: 0,
  //         isFavorite: values.isFavorite === 'file2' ? 1 : 0
  //       },
  //       {
  //         type: 'file_3',
  //         file: typeof values.file3 === 'string' ? [] : ([values.file3] as File[]),
  //         cords: values.cords3,
  //         id: 0,
  //         isFavorite: values.isFavorite === 'file3' ? 1 : 0
  //       },
  //       {
  //         type: 'file_4',
  //         file: typeof values.file4 === 'string' ? [] : ([values.file4] as File[]),
  //         cords: values.cords4,
  //         id: 0,
  //         isFavorite: values.isFavorite === 'file4' ? 1 : 0
  //       },
  //       {
  //         type: 'file_5',
  //         file: values.file5 && values.file5.length > 0 ? values.file5 : [],
  //         cords: values.cords5 && values.cords5.length > 0 ? values.cords5 : [],
  //         id: 0
  //       }
  //     ];

  //     const allFilesToUpload = allFiles?.filter((data) => {
  //       if (data) {
  //         if (Array.isArray(data.file)) {
  //           if (data.type === 'file_5') {
  //             const filteredFiles = (data.file as File[])?.filter((entry) => entry !== null && entry !== undefined);
  //             if (filteredFiles.length > 0) {
  //               data.file.splice(0, data.file.length, ...filteredFiles);
  //               return true;
  //             }
  //             return false;
  //           } else {
  //             const filteredFiles = data.file.filter((file) => file !== null);
  //             if (filteredFiles.length > 0) {
  //               data.file.splice(0, data.file.length, ...filteredFiles);
  //               return true;
  //             }
  //             return false;
  //           }
  //         } else {
  //           return data.file !== null;
  //         }
  //       }
  //       return false;
  //     });

  //     if (values.file1 || values.file2 || values.file3 || values.file4 || values.file5 || workerPhotos.length > 0) {
  //       mutationMultipleImageUpload.mutate(
  //         { allFilesToUpload },
  //         {
  //           onSuccess: (imageKitRes) => {
  //             const uploadFile1 = imageKitRes.uploadPhotos.filter((x) => x.type === 'file_1')[0]?.photosURL ?? values.file1;
  //             const uploadFile2 = imageKitRes.uploadPhotos.filter((x) => x.type === 'file_2')[0]?.photosURL ?? values.file2;
  //             const uploadFile3 = imageKitRes.uploadPhotos.filter((x) => x.type === 'file_3')[0]?.photosURL ?? values.file3;
  //             const uploadFile4 = imageKitRes.uploadPhotos.filter((x) => x.type === 'file_4')[0]?.photosURL ?? values.file4;
  //             const uploadFile5: ImageUploadPayload[] = [
  //               ...imageKitRes.uploadPhotos?.filter((x) => x.type === 'file_5'),
  //               ...values.file5Existing
  //                 .filter((x) => x !== null)
  //                 .map((photo) => ({
  //                   photosURL: photo.photo,
  //                   type: 'file_5',
  //                   id: photo.id || 0,
  //                   cords: photo.cords
  //                 }))
  //             ];

  //             const uploadPhotos: ImageUploadPayload[] = [];
  //             if (uploadFile1)
  //               uploadPhotos.push({
  //                 photosURL: uploadFile1,
  //                 type: 'file_1',
  //                 id: typeof values.file1 === 'string' ? workerPhotos.filter((photo) => photo.type === 'file_1')[0]?.id || 0 : 0,
  //                 cords: values.cords1,
  //                 isFavorite: values.isFavorite === 'file1' ? 1 : 0
  //               });
  //             if (uploadFile2)
  //               uploadPhotos.push({
  //                 photosURL: uploadFile2,
  //                 type: 'file_2',
  //                 id: typeof values.file2 === 'string' ? workerPhotos.filter((photo) => photo.type === 'file_2')[0]?.id || 0 : 0,
  //                 cords: values.cords2,
  //                 isFavorite: values.isFavorite === 'file2' ? 1 : 0
  //               });
  //             if (uploadFile3)
  //               uploadPhotos.push({
  //                 photosURL: uploadFile3,
  //                 type: 'file_3',
  //                 id: typeof values.file3 === 'string' ? workerPhotos.filter((photo) => photo.type === 'file_3')[0]?.id || 0 : 0,
  //                 cords: values.cords3,
  //                 isFavorite: values.isFavorite === 'file3' ? 1 : 0
  //               });
  //             if (uploadFile4)
  //               uploadPhotos.push({
  //                 photosURL: uploadFile4,
  //                 type: 'file_4',
  //                 id: typeof values.file4 === 'string' ? workerPhotos.filter((photo) => photo.type === 'file_4')[0]?.id || 0 : 0,
  //                 cords: values.cords4,
  //                 isFavorite: values.isFavorite === 'file4' ? 1 : 0
  //               });
  //             if (uploadFile5)
  //               uploadFile5.forEach((x) => {
  //                 if (x.photosURL !== null)
  //                   uploadPhotos.push({
  //                     id: x.id || 0,
  //                     photosURL: x.photosURL,
  //                     type: 'file_5',
  //                     cords: x.cords,
  //                     isFavorite: 0
  //                   });
  //               });

  //             const newReq = imageKitRes;
  //             newReq.uploadPhotos = uploadPhotos;

  //             mutationWorkerMultipleImageUpload.mutate(
  //               {
  //                 imageKitRes: {
  //                   uploadPhotos: JSON.stringify(newReq.uploadPhotos)
  //                 }
  //               },
  //               {
  //                 onSuccess: (res) => {
  //                   if (res.success) {
  //                     handleNext();
  //                   }
  //                 }
  //               }
  //             );
  //           }
  //         }
  //       );
  //     }
  //   };

  return (
    <Formik
      initialValues={initialValuesPerStep}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values, 'values');

        // handleSubmit(values);
      }}
    >
      {({ values, errors, touched, setFieldValue, handleSubmit }) => (
        <Box component="form" onSubmit={handleSubmit}>
          <Box>
            <ModelMultiplePhoto values={values} setValue={setFieldValue} errors={errors} touched={touched} workerPhotos={workerPhotos} />
            <UploadBox>
              <UploadMultipleBox>
                <UIThemeButton variant="outlined" onClick={handlePrevVerificationStep}>
                  <RiArrowLeftLine />
                  <UINewTypography variant="body">Back</UINewTypography>
                </UIThemeButton>
                <StyleButtonV2
                  id="photos-button"
                  type="submit"
                  variant="contained"
                  //   loading={mutationWorkerMultipleImageUpload.isLoading || mutationMultipleImageUpload.isLoading}
                >
                  <UINewTypography variant="body">Next</UINewTypography>
                  <RiArrowRightLine />
                </StyleButtonV2>
              </UploadMultipleBox>
            </UploadBox>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default UploadImage;
