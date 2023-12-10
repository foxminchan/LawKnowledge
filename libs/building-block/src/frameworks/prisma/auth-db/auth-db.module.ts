import { Global, Module } from '@nestjs/common';
import { AuthDataService } from './auth-db.service';

@Global()
@Module({
  providers: [AuthDataService],
  exports: [AuthDataService],
})
export class AuthDataModule {}
