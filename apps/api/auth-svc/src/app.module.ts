import { Module } from '@nestjs/common';
import { DataModule } from '@law-knowledge/framework';
import { AuthModule, RoleModule, UserModule } from './modules';

@Module({
  imports: [DataModule, AuthModule, UserModule, RoleModule],
  providers: [],
})
export class AppModule {}
