import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from '../constants/types';
import HttpService from '../services/http.service';
import TokenService from '../services/token.service';
import { IHttpService, ITokenService } from '../interfaces/interfaces';

const container = new Container();

container.bind<IHttpService>(TYPES.IHttpService).to(HttpService);
container.bind<ITokenService>(TYPES.ITokenService).to(TokenService);

export { container };
