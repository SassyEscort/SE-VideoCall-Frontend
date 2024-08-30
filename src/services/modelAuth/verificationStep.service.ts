import axios, { AxiosError } from 'axios';
import { CustomFile, ImagekitTokenResponse, ImageUplaodBody } from 'views/protectedModelViews/verification/verificationStep2Document/type';
import { VerificationPayload } from './types';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { FileBody } from 'views/protectedModelViews/verification/verificationTypes';
import {
  ImagePayload,
  ImageUploadPayload,
  PhotoUpload,
  ThumbnailPayload
} from 'views/protectedModelViews/verification/stepThree/uploadImage';
import { DOCUMENT_UPLOAD_FILE_TYPE, PHOTO_TYPE } from 'constants/workerVerification';
import { GenericRes } from 'services/guestAuth/authuser.services';

export const imageKitObj = {
  publicKey: process.env.NEXT_PUBLIC_IMAGE_KIT_KEY!,
  folder: 'images',
  authenticationEndPoint: process.env.AUTHENTICATION_END_POINT!,
  uploadApi: 'https://upload.imagekit.io/api/v1/files/upload'
};

export type EmailVerify = {
  email: string;
  verification_code: string;
};

export type FileIdDeleteParams = {
  file_ids: string[];
};

export class VerificationStepService {
  static imageKitAuthApi = async () => {
    const res = await axios.get<ImagekitTokenResponse>(`${process.env.NEXT_PUBLIC_API_BASE_URL_IMAGE}/api/imagekit`, {
      headers: { 'Content-Type': 'application/json' }
    });
    return res.data;
  };

  static imageKitUplaodApi = async (fileData: CustomFile): Promise<ImageUploadPayload> => {
    try {
      let imageRes;
      let file_id;
      let file_type;
      if (typeof fileData !== 'string') {
        const getToken = await this.imageKitAuthApi();
        const body: ImageUplaodBody = {
          file: fileData,
          publicKey: imageKitObj.publicKey,
          signature: getToken.signature,
          expire: getToken.expire,
          token: getToken.token,
          fileName: Date.now().toString() + fileData.name,
          folder: imageKitObj.folder
        };

        const response = await axios.post(imageKitObj.uploadApi, body, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });

        imageRes = response.data.url;
        file_id = response.data.fileId;
        file_type = response.data.videoCodec === 'bmp' ? DOCUMENT_UPLOAD_FILE_TYPE.IMAGE : response.data.fileType;
      } else {
        imageRes = fileData;
      }

      return {
        photosURL: imageRes,
        file_id: file_id,
        file_type: file_type
      } as unknown as PhotoUpload;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as ImageUploadPayload;
    }
  };

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

  static multipleImageKitUplaodApi = async (fileData: FileBody[]) => {
    const payload: ImageUploadPayload[] = [];
    for (const data of fileData) {
      if (Array.isArray(data.file)) {
        for (const value of data.file) {
          const getToken = await this.imageKitAuthApi();

          const body = {
            file: value,
            publicKey: imageKitObj.publicKey,
            signature: getToken.signature,
            expire: getToken.expire,
            token: getToken.token,
            fileName: Date.now() + (value.name || 'name'),
            folder: imageKitObj.folder
          };

          const responseData = await axios.post(imageKitObj.uploadApi, body, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });

          payload.push({
            link: responseData?.data?.url,
            cords: data.cords ? String(data.cords) : '',
            is_favourite: 0,
            is_document: 0,
            document_type: PHOTO_TYPE.MODEL_PHOTO,
            document_number: null,
            photosURL: responseData?.data?.url,
            type: data?.type,
            file_id: responseData.data.fileId,
            file_type: responseData.data.videoCodec === 'bmp' ? DOCUMENT_UPLOAD_FILE_TYPE.IMAGE : responseData.data.fileType,
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

  static deleteImage = async (token: string, fileId: string): Promise<GenericRes> => {
    try {
      const res = await axios.delete(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/model/file/${fileId}`, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });
      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as GenericRes;
    }
  };

  static deleteMultipleImage = async (token: string, fileId: FileIdDeleteParams): Promise<GenericRes> => {
    try {
      const res = await axios.delete(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/model/files`, {
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
