import { Module } from '@nestjs/common';
import { DocumentModule, HeadingModule, TopicModule } from './modules';
import { LawDataModule, LoggerModule } from '@law-knowledge/building-block';

@Module({
  imports: [
    TopicModule,
    LoggerModule,
    LawDataModule,
    HeadingModule,
    DocumentModule,
  ],
})
export class AppModule {}
