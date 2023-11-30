import { UserModule } from '../user';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { JWT_SECRET, JWT_EXPIRES_IN } from '@law-knowledge/shared';
import { CreateTokenCommandHandler } from './cqrs/commands/create-token.comand';

@Module({
  imports: [
    CqrsModule,
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: JWT_EXPIRES_IN },
    }),
  ],
  controllers: [AuthController],
  providers: [CreateTokenCommandHandler],
})
export class AuthModule {}
