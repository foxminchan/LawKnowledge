import {
  Logger,
  Injectable,
  OnModuleInit,
  OnApplicationShutdown,
} from '@nestjs/common';
import { KafkaService } from './kafka.service';

@Injectable()
export class KafkaPublisher<T> implements OnModuleInit, OnApplicationShutdown {
  constructor(private kafkaService: KafkaService) {}

  async onModuleInit() {
    await this.kafkaService.producer.connect();
  }

  async publish(
    topic: string,
    messages: T[],
    retryAttempts: number = 5,
    retryDelay: number = 1000
  ) {
    for (let attempt = 1; attempt <= retryAttempts; attempt++) {
      try {
        const data = await this.kafkaService.producer.send({
          topic,
          messages: messages.map((message) => ({
            value: JSON.stringify(message),
          })),
        });

        Logger.log(`✅ Publish to kafka is success: ${JSON.stringify(data)}`);

        break;
      } catch (error) {
        if (attempt === retryAttempts) {
          Logger.error(
            `❌ Publish to kafka has errors: ${JSON.stringify(error)}`
          );
        }
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
      }
    }
  }

  async onApplicationShutdown() {
    await this.kafkaService.producer.disconnect();
  }
}
