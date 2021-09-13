import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  app.use(
    session({
      secret: 'Keyboard cat', // get env vars
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 360000 },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}
bootstrap();
