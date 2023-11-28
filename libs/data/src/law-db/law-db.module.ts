import { Global, Module } from '@nestjs/common';
import { LawDataService } from './law-db.service';

@Global()
@Module({
  providers: [LawDataService],
  exports: [LawDataService],
})
export class LawDataModule {}
