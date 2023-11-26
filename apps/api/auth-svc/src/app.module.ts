import { Module } from '@nestjs/common';
import { DataModule, LoggerModule } from '@law-knowledge/framework';
import { AuthModule, RoleModule, UserModule } from './modules';

@Module({
  imports: [DataModule, AuthModule, UserModule, RoleModule, LoggerModule],
})
export class AppModule {}
