import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //CORS Setting
  app.enableCors();

  // Swagger Setting
  const config = new DocumentBuilder()
    .setTitle('Novelier Docs')
    .setDescription('Novelier 0.1 API description')
    .setVersion('0.1')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT);
}
bootstrap();
