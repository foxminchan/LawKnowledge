import { DataModule } from '@law-knowledge/framework';
import { UserModule } from './modules';
import { Module } from '@nestjs/common';

@Module({
  imports: [DataModule, UserModule],
  providers: [],
})
export class AppModule {}
