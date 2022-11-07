import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const express = require('express');
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.use(express.json({limit: '50mb'}));
  app.use(express.urlencoded({limit: '50mb', extended: true}));


  const config = new DocumentBuilder()
  .addBearerAuth()
    .setTitle('bbbbbbbbbb')
    .setDescription('The bbbbbb API description')
    .setVersion('1.0')
    .addTag('bbbbbb')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  // fs.writeFileSync("./swagger-spec.json", JSON.stringify(document));
  SwaggerModule.setup('apidoc', app, document);

  await app.listen(3333);
}



bootstrap();
