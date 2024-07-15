import { WorkerPhotos } from 'views/protectedModelViews/verification/stepThree/uploadImage';

export const sortExistingPhotos = (file1: WorkerPhotos, file2: WorkerPhotos): number => {
  if (file1.favourite !== file2.favourite) {
    return file2.favourite - file1.favourite;
  } else {
    return file1.id - file2.id;
  }
};
