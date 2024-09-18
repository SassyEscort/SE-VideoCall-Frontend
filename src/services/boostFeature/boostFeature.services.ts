import axios from 'axios';
import { GenericResCustom } from 'services/guestAuth/authuser.services';

export type ProfilePlanData = {
  id: number;
  start_time: string;
  end_time: string;
  cooldown: number;
  is_active: number;
  profile_plan_id: number;
};

export type ProfilePlanRes = {
  free_plan_used: number;
  plans: ProfilePlanData[];
};

export interface ProfilePlanResponse extends GenericResCustom {
  data: ProfilePlanRes;
}

export class BoostFeatureService {
  static getModelProfilePlan = async (token: string): Promise<ProfilePlanResponse> => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/model/profile-plans`, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });
      return res.data;
    } catch (err) {
      return err as ProfilePlanResponse;
    }
  };
}
