import { Module } from '@nestjs/common';
import { AuthModule, RoleModule, UserModule } from './modules';
import { AuthDataModule, LoggerModule } from '@law-knowledge/building-block';

@Module({
  imports: [AuthDataModule, AuthModule, UserModule, RoleModule, LoggerModule],
})
export class AppModule {}
