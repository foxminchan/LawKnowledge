import {
  Logger,
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
} from '@nestjs/common';
import { Kafka, Producer, Consumer } from 'kafkajs';
import { KafkaLogger } from '@nestjs/microservices';

@Injectable()
export class KafkaService implements OnModuleInit, OnModuleDestroy {
  private kafka: Kafka;
  public producer: Producer;
  public consumer: Consumer;

  private logger = new Logger(KafkaService.name);

  constructor() {
    this.kafka = new Kafka({
      clientId: process.env['KAFKA_CLIENT_ID'],
      brokers: [process.env['KAFKA_BROKER'] ?? 'localhost:9092'],
      logCreator: KafkaLogger.bind(null, this.logger),
    });

    this.producer = this.kafka.producer();
    this.consumer = this.kafka.consumer({ groupId: 'law-group' });
  }

  async onModuleInit() {
    await this.connectProducer();
    await this.connectConsumer(['law-topic']);
  }

  async onModuleDestroy() {
    await this.producer.disconnect();
    await this.consumer.disconnect();
  }

  async connectProducer() {
    await this.producer.connect();
  }

  async connectConsumer(topics: string[]) {
    await this.consumer.connect();
    for (const topic of topics) {
      await this.consumer.subscribe({ topic, fromBeginning: true });
    }
  }
}
