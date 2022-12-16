import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  try {
    const PORT = process.env.PORT || 3333
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe())
    app.use(cookieParser())
    const config = new DocumentBuilder()
    .setTitle('Ticket')
    .setDescription('Rest Api')
    .setVersion('1.0.0')
    .addTag('NodeJs, NestJs, Postgres, Sequalize')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document)
  
    await app.listen(PORT, () => {
      console.log(`Server is running: http://localhost:${PORT}`)
    });
  } catch (error) {
    console.log(error);
  }
}
start();
