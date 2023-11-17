import { TYPES } from '../constants/types';
import { container } from '../configs/inversify.config';
import { IHttpService, ITokenService } from '../interfaces/interfaces';

const axiosService = container.get<IHttpService>(TYPES.IHttpService);
const tokenService = container.get<ITokenService>(TYPES.ITokenService);

export { axiosService, tokenService };
