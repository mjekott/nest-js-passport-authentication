import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/auth.guard';
import { AuthenicatedGuard } from './auth/authenticated.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(@Request() req): any {
    return { msg: 'Logged in' };
  }

  @UseGuards(AuthenicatedGuard)
  @Get('protected')
  getHello(): string {
    return 'hello';
  }
}
