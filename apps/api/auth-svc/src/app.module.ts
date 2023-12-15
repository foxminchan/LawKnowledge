import { Module } from '@nestjs/common';
import { CommunicationProtocolEnum, DaprClient } from 'dapr-client';
import { NestConfigModule, configs } from './configs';
import { AuthDataModule } from '@law-knowledge/building-block';
import { AuthModule, RoleModule, UserModule } from './modules';

@Module({
  imports: [
    AuthModule,
    UserModule,
    RoleModule,
    AuthDataModule,
    NestConfigModule,
  ],
  providers: [
    {
      provide: DaprClient,
      useValue: new DaprClient({
        daprHost: configs().daprUrl,
        daprPort: configs().daprPort,
        communicationProtocol: CommunicationProtocolEnum.GRPC,
      }),
    },
  ],
})
export class AppModule {}
