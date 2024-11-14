import axios, { AxiosError } from 'axios';
import { CustomFile } from 'views/protectedModelViews/verification/verificationStep2Document/type';
import { VerificationPayload } from './types';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { FileBody } from 'views/protectedModelViews/verification/verificationTypes';
import { ImagePayload, ImageUploadPayload, ThumbnailPayload } from 'views/protectedModelViews/verification/stepThree/uploadImage';
import { DOCUMENT_UPLOAD_FILE_TYPE, PHOTO_TYPE } from 'constants/workerVerification';
import { GenericRes, GenericResCustom } from 'services/guestAuth/authuser.services';

export type EmailVerify = {
  email: string;
  verification_code: string;
};

export type FileIdDeleteParams = {
  file_ids: string[];
};

export type SingleFileRes = {
  fileId: string;
  url: string;
};

export interface SingleFileUploadRes extends GenericResCustom {
  data: SingleFileRes;
}

export class VerificationStepService {
  static verificationtepSecond = async (params: VerificationPayload, token: TokenIdType) => {
    try {
      const res = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/model/photos`, params, {
        headers: { 'Content-Type': 'application/json', Authorization: token.token }
      });
      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data || { error_message: error.message };
    }
  };

  static uploadModelPhotos = async (payload: ImagePayload, token: TokenIdType) => {
    try {
      const res = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/model/photos`, payload, {
        headers: { 'Content-Type': 'application/json', Authorization: token.token }
      });
      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data || { error_message: error.message };
    }
  };

  static modelThumbnailPhoto = async (payload: ThumbnailPayload, token: TokenIdType) => {
    try {
      const res = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/model/mark-thumbnail`, payload, {
        headers: { 'Content-Type': 'application/json', Authorization: token.token }
      });
      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data || { error_message: error.message };
    }
  };

  static modelVerifyEmail = async (payload: EmailVerify, token: string) => {
    try {
      const res = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/model/verify-email`, payload, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });
      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data || { error_message: error.message };
    }
  };

  static modelReview = async (token: string) => {
    try {
      const res = await axios.put(
        process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/model/review`,
        {},
        {
          headers: { 'Content-Type': 'application/json', Authorization: token }
        }
      );
      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data || { error_message: error.message };
    }
  };

  static modelImageUploadApi = async (fileData: CustomFile, token: string): Promise<SingleFileUploadRes> => {
    try {
      const formData = new FormData();
      formData.append('file', fileData);
      formData.append('fileName', Date.now().toString() + fileData.name);

      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/model/model-photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token
        }
      });

      return res?.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as SingleFileUploadRes;
    }
  };

  static modelMultipleImageUplaodApi = async (fileData: FileBody[], token: string) => {
    const payload: ImageUploadPayload[] = [];
    for (const data of fileData) {
      if (Array.isArray(data.file)) {
        for (const value of data.file) {
          const formData = new FormData();
          formData.append('file', value);
          formData.append('fileName', Date.now().toString() + value.name);

          const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/model/model-photo`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: token
            }
          });

          payload.push({
            link: res?.data?.data.url,
            cords: data.cords ? String(data.cords) : '',
            is_favourite: 0,
            is_document: 0,
            document_type: PHOTO_TYPE.MODEL_PHOTO,
            document_number: null,
            photosURL: res?.data?.data.url,
            type: data?.type,
            file_id: res?.data?.data.fileId,
            file_type:
              res?.data?.data.url.split('.').pop() === 'bmp' ? DOCUMENT_UPLOAD_FILE_TYPE.IMAGE : res?.data?.data.url.split('.').pop(),
            document_front_side: 0
          });
        }
      }
    }
    const uploadBody = {
      uploadPhotos: payload
    };

    return uploadBody;
  };

  static modelMultipleImageDelete = async (token: string, fileId: FileIdDeleteParams): Promise<GenericRes> => {
    try {
      const res = await axios.delete(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/model/do-files`, {
        headers: { 'Content-Type': 'application/json', Authorization: token },
        data: fileId
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as GenericRes;
    }
  };
}
