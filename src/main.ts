import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// The bootstrap function initializes the app and starts it on port 3000 by default.
async function bootstrap() {
  // The nestFactory.create method creates an instance of the application using the AppModule.
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
