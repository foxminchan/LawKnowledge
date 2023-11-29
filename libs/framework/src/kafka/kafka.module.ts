import { Module } from '@nestjs/common';
import { KafkaService } from './kafka.service';
import { KafkaPublisher } from './kafka.publisher';
import { KafkaSubscriber } from './kafka.subscriber';

@Module({
  providers: [KafkaService, KafkaPublisher, KafkaSubscriber],
  exports: [KafkaService, KafkaPublisher, KafkaSubscriber],
})
export class KafkaModule {}
