import { Controller, Get } from '@nestjs/common';

@Controller('habits') // end point of get
export class HabitsController {
    @Get()
    findAll() { // parameter of get
        return ['Habit 1', 'Habit 2']
    }
}
