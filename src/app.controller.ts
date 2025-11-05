import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// A controller is a class that is decorated with the @Controller
//  decorator. The role of a controller is to
//  handle incoming requests and return responses
//  to the client. To handle those requests you can
//  define methods that are decorated with the @Get,
//  @Post, @Put, @Delete decorators.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
