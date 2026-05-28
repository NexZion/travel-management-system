import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';

async function bootstrap() {
  const config = new DocumentBuilder()
  .setTitle('Travel Management API')
  .setDescription('API Documentation')
  .setVersion('1.0')
  .build();
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, config);
  
  SwaggerModule.setup('api', app, document);
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  await app.listen(process.env.PORT ?? 3000);
  //await app.listen(process.env.PORT || 3000);
}
bootstrap();
