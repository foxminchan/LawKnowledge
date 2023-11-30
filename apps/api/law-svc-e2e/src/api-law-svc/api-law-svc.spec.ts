import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ClientsModule, Transport, ClientProxy } from '@nestjs/microservices';

describe('Test Law', () => {
  let app: INestApplication;
  let client: ClientProxy;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ClientsModule.register([
          { name: 'LawService', transport: Transport.TCP },
        ]),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.connectMicroservice({
      transport: Transport.TCP,
    });

    await app.startAllMicroservices();
    await app.init();
    client = app.get('LawService');
    await client.connect();
  });

  afterAll(async () => {
    await app.close();
    client.close();
  });

  it('get topic', (done) => {
    const response = client.send(
      { cmd: 'getTopics' },
      {
        id: 'c124612e-a23f-4199-8747-55fe4e8a8c89',
      }
    );

    response.subscribe((got) => {
      expect(got).toBe(true);
      done();
    });
  });

  it('get heading', (done) => {
    const response = client.send(
      { cmd: 'getHeading' },
      {
        id: '06936689-e896-45ee-9486-99b9370f31bc',
      }
    );

    response.subscribe((got) => {
      expect(got).toBe(true);
      done();
    });
  });

  it('get document', (done) => {
    const response = client.send(
      { cmd: 'getDocument' },
      {
        id: '06936689-e896-45ee-9486-99b9370f31bc',
      }
    );

    response.subscribe((got) => {
      expect(got).toBe(true);
      done();
    });
  });
});
