import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser'

async function start() {
  try {
    const PORT = process.env.PORT || 3333
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe())
    app.use(cookieParser())
    await app.listen(PORT, () => {
      console.log(`Server is running: http://localhost:${PORT}`)
    });
  } catch (error) {
    console.log(error);
  }
}
start();
