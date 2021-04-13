import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from '@nestjs/platform-express'
import {resolve} from 'path'

require('dotenv').config()

async function bootstrap() {
  const app  = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = process.env.PORT 
  app.useStaticAssets(resolve('./dist/public'))
  app.enableCors({origin:'http://localhost:4200'})
 /*  app.setGlobalPrefix('api') */
  await app.listen(port); 
  console.log('serve ron port',port)
}
bootstrap();
