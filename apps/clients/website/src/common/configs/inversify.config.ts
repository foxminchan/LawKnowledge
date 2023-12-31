/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from '@common/constants/types';
import HttpService from '@common/services/http.service';
import TokenService from '@common/services/token.service';
import { IHttpService, ITokenService } from '@common/interfaces/interfaces';

const container = new Container();

container.bind<IHttpService>(TYPES.IHttpService).to(HttpService);
container.bind<ITokenService>(TYPES.ITokenService).to(TokenService);

export { container };
