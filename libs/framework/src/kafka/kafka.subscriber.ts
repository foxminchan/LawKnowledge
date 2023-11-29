import { KafkaService } from './kafka.service';
import { Logger, Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class KafkaSubscriber implements OnModuleInit {
  constructor(private kafkaService: KafkaService) {}

  async onModuleInit() {
    try {
      await this.kafkaService.connectConsumer(['law-topic']);

      this.kafkaService.consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
          if (message.value !== null) {
            Logger.log(
              `✅ Subscribe to kafka is success: ${JSON.stringify(
                message.value
              )} from partition ${partition} of topic ${topic}`
            );
          }
        },
      });
    } catch (error) {
      Logger.error(
        `❌ Subscribe to kafka has errors: ${JSON.stringify(error)}`
      );
      await this.kafkaService.consumer.disconnect();
    }
  }
}
