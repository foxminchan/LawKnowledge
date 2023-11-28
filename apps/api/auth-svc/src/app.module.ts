import { Module } from '@nestjs/common';
import { AuthDataModule } from '@law-knowledge/data';
import { LoggerModule } from '@law-knowledge/framework';
import { AuthModule, RoleModule, UserModule } from './modules';

@Module({
  imports: [AuthDataModule, AuthModule, UserModule, RoleModule, LoggerModule],
})
export class AppModule {}
