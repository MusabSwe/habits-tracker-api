import { Controller, Get } from '@nestjs/common';

@Controller('habits')
export class HabitsController {
    @Get()
    findAll() {
        return ['Habit 1', 'Habit 2']
    }
}
