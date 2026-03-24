import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import morgan from 'morgan'
import { PORT } from './config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.use(morgan('dev'))
  await app.listen(PORT ?? 3000);
}
bootstrap();
