import { SetMetadata } from '@nestjs/common';
import { IGNORE_CACHING_META } from '../@types/constants';

export const NoCache = () => SetMetadata(IGNORE_CACHING_META, true);
