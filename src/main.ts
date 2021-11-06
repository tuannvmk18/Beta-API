import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('Beta API')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'Jwt',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(+process.env.APP_PORT || 3000);
}
bootstrap();
