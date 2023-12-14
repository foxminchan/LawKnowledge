import { atomWithMutation } from 'jotai-tanstack-query';
import { axiosService } from '@/common/utils/inversify';
import { SignUpPayload, SignUpResponse } from '../types/sign-up.type';

export const signUpAtom = atomWithMutation(() => ({
  mutationKey: ['userRegister'],
  mutationFn: async (user: SignUpPayload) => {
    const response = await axiosService.post<SignUpResponse>('/auth', user);
    return response.data;
  },
}));
