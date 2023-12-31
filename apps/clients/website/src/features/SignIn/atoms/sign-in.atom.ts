/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { atomWithMutation } from 'jotai-tanstack-query';
import { axiosService } from '@/common/utils/inversify';
import { SignInPayload, SignInResponse } from '../types/sign-in.type';

export const signInAtom = atomWithMutation(() => ({
  mutationKey: ['userLogin'],
  mutationFn: async (user: SignInPayload) => {
    const response = await axiosService.post<SignInResponse>(
      '/auth/login',
      user,
    );
    return response.data;
  },
}));
