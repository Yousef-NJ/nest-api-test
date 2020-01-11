import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  (app as any).useStaticAssets(path.join(__dirname, '/../public'));
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
