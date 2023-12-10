import { Module } from '@nestjs/common';
import { DocumentModule, HeadingModule, TopicModule } from './modules';
import { LawDataModule, LoggerModule } from '@law-knowledge/building-block';

@Module({
  imports: [
    LoggerModule,
    LawDataModule,
    DocumentModule,
    HeadingModule,
    TopicModule,
  ],
})
export class AppModule {}
