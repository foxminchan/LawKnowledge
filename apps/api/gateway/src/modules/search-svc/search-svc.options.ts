import { join } from 'path';
import { ClientOptions, Transport } from '@nestjs/microservices';

export const SearchSvcOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: `${process.env.SEARCH_SVC_URL}:${process.env.SEARCH_SVC_PORT}`,
    package: 'search',
    protoPath: join(__dirname, './proto/search.proto'),
    loader: {
      enums: String,
      objects: true,
      arrays: true,
    },
  },
};
