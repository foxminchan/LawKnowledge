import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ClientsModule, Transport, ClientProxy } from '@nestjs/microservices';

describe('Create User', () => {
  let app: INestApplication;
  let client: ClientProxy;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ClientsModule.register([
          { name: 'AuthService', transport: Transport.TCP },
        ]),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.connectMicroservice({
      transport: Transport.TCP,
    });

    await app.startAllMicroservices();
    await app.init();
    client = app.get('AuthService');
    await client.connect();
  });

  afterAll(async () => {
    await app.close();
    client.close();
  });

  it('creates a user', (done) => {
    const response = client.send(
      { cmd: 'addUser' },
      {
        name: 'Demo User',
        email: 'demo@gmail.com',
        password: process.env.PASSWORD,
        card: '123456789',
        phone: '1234567890',
        address: 'Nam Ky Khoi Nghia, Quan 3, TP HCM',
      }
    );

    response.subscribe((created) => {
      expect(created).toBe(true);
      done();
    });
  });

  it('login', (done) => {
    const response = client.send(
      { cmd: 'login' },
      {
        email: 'demo@gmail.com',
        password: process.env.PASSWORD,
      }
    );

    response.subscribe((created) => {
      expect(created).toBe(true);
      done();
    });
  });

  it('get user', (done) => {
    const response = client.send(
      { cmd: 'getUser' },
      {
        email: 'demo@gmail.com',
      }
    );

    response.subscribe((created) => {
      expect(created).toBe(true);
      done();
    });
  });
});
