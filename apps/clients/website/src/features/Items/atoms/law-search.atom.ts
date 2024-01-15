/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { atomWithMutation } from 'jotai-tanstack-query';
import { axiosService } from '@/common/utils/inversify';
import { ItemResponse } from '../types/law-search.type';

export const lawSearchAtom = atomWithMutation(() => ({
  mutationKey: ['lawSearch'],
  mutationFn: async (keyword: string) => {
    const response = await axiosService.get<ItemResponse[]>(
      `/search/search?context=${keyword}`,
    );
    return response.data;
  },
}));
