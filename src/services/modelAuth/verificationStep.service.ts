import axios, { AxiosError } from 'axios';
import { ErrorMessage } from 'constants/common.constants';
import { toast } from 'react-toastify';
import { getUserTokenServer } from 'utils/getSessionData';
import {
  CustomFile,
  ImagekitTokenResponse,
  ImageUplaodBody,
  ImageUploadPayload,
  Payload
} from 'views/protectedModelViews/verificationStep2Document/type';

export const imageKitObj = {
  publicKey: process.env.NEXT_PUBLIC_IMAGE_KIT_KEY!,
  folder: 'images',
  authenticationEndPoint: process.env.AUTHENTICATION_END_POINT!,
  uploadApi: 'https://upload.imagekit.io/api/v1/files/upload'
};

export class VerificationStepService {
  static imageKitAuthApi = async () => {
    const res = await axios.get<ImagekitTokenResponse>(`${process.env.NEXT_PUBLIC_API_BASE_URL_IMAGE}/api/imagekit`, {
      headers: { 'Content-Type': 'application/json' }
    });
    return res.data;
  };

  static imageKitUplaodApi = async (fileData: CustomFile): Promise<ImageUploadPayload | string> => {
    try {
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

      return {
        photosURL: response.data.url
      } as unknown as ImageUploadPayload;
    } catch (error) {
      toast.error(ErrorMessage);
      return ErrorMessage;
    }
  };

  static uploadModelPhotos = async (payload: Payload) => {
    const token = await getUserTokenServer();
    try {
      const res = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/model/photos`, payload, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data || { error_message: error.message };
    }
  };
}
