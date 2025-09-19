import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';

async function bootstrap() {
  const config_module = await NestFactory.createApplicationContext(
    ConfigModule.forRoot(),
  );
  const config_service = config_module.get(ConfigService);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'user',
        protoPath: join(__dirname, '../proto/user.proto'),
        url: config_service.get<string>('USER_SERVICE_URL'),
      },
    },
  );
  await app.listen();
}
bootstrap();
