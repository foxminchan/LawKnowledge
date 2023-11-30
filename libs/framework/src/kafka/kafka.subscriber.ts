import { Consumer } from 'kafkajs';
import { KafkaService } from './kafka.service';
import { Logger, Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class KafkaSubscriber<T> implements OnModuleInit {
  constructor(private kafkaService: KafkaService) {}

  private readonly consumers: Consumer[] = [];

  async onModuleInit() {
    try {
      await this.kafkaService.consumer.connect();

      const consumer = this.kafkaService.consumer;

      await consumer.run({
        eachMessage: async ({ message }) => {
          if (message.value) {
            const messageData = JSON.parse(message.value.toString()) as T;
            this.processMessage(messageData);
          }

          Logger.log(
            `✅ Subscribe to kafka is success: ${JSON.stringify(message)}`
          );
        },
      });

      this.consumers.push(consumer);
    } catch (error) {
      Logger.error(
        `❌ Subscribe to kafka has errors: ${JSON.stringify(error)}`
      );
      await this.kafkaService.consumer.disconnect();
    }
  }

  processMessage(message: T) {
    return message;
  }
}
