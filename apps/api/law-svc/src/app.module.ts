import { Module } from '@nestjs/common';
import { LawDataModule } from '@law-knowledge/data';
import { LoggerModule } from '@law-knowledge/framework';
import { DocumentModule, HeadingModule } from './modules';

@Module({
  imports: [LoggerModule, LawDataModule, DocumentModule, HeadingModule],
})
export class AppModule {}
