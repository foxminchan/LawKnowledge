import { Module } from '@nestjs/common';
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
  controllers: [],
  providers: [],
})
export class LawSvcModule {}
