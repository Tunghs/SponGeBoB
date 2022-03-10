import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: 'Content-Type',
    methods: 'POST,GET,PUT,PATCH,DELETE,OPTIONS',
    credentials: true,
    origin: true,
  });

  app.use(cookieParser());
  const config = new DocumentBuilder()
    .setTitle('SponGeBoB API')
    .setDescription('SponGeBoB API Document')
    .setVersion('1.0')
    .addCookieAuth('connect.sid')
    .addTag('cats')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    customSiteTitle: 'SponGeBoB API',
  });

  const port = process.env.NODE_ENV === 'prod' ? 80 : 8000;

  await app.listen(port);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  console.log(`listening on port ${port}`);
}
bootstrap();
