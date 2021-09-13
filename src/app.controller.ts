import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req): any {
    return req.user;
  }

  @Get('protected')
  getHello(): string {
    return 'hello';
  }
}
