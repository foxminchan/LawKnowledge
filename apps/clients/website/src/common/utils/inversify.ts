import { TYPES } from '@common/constants/types';
import { container } from '@common/configs/inversify.config';
import { IHttpService, ITokenService } from '@common/interfaces/interfaces';

const axiosService = container.get<IHttpService>(TYPES.IHttpService);
const tokenService = container.get<ITokenService>(TYPES.ITokenService);

export { axiosService, tokenService };
