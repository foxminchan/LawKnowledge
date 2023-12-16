import { Module } from '@nestjs/common';
import { NestConfigModule } from './configs';
import { AuthDataModule } from '@law-knowledge/building-block';
import { AuthModule, RoleModule, UserModule } from './modules';

@Module({
  imports: [
    AuthModule,
    UserModule,
    RoleModule,
    AuthDataModule,
    NestConfigModule,
  ],
})
export class AppModule {}
