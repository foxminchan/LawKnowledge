/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { AxiosRequestConfig } from 'axios';

export const axiosConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.DEV
    ? import.meta.env.VITE_DEV_DOMAIN
    : import.meta.env.VITE_PROD_DOMAIN,
  withCredentials: true,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
};
