import { Module } from '@nestjs/common';
import { LawService } from './law-svc.service';
import { LawController } from './law-svc.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'LAW_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.LAW_SVC_HOST,
          port: parseInt(process.env.LAW_SVC_PORT, 10),
        },
      },
    ]),
  ],
  controllers: [LawController],
  providers: [LawService],
})
export class LawSvcModule {}
