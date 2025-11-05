import { Injectable } from '@nestjs/common';
// A service is a class that contains the
//  business logic of the application.
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
