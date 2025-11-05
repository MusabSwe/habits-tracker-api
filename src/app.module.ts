import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HabitsModule } from './habits/habits.module';

// A module is a way to group related components together.
@Module({
  imports: [HabitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
