import { join } from 'path';
import { ClientOptions, Transport } from '@nestjs/microservices';

export const AuthSvcOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: `${process.env.AUTH_SVC_HOST}:${process.env.AUTH_SVC_PORT}`,
    package: 'auth',
    protoPath: join(__dirname, '../../proto/modules/auth.proto'),
    loader: {
      enums: String,
      objects: true,
      arrays: true,
    },
  },
};
