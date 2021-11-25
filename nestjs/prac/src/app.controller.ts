import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { user } from './interface/user';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  info(user: user) {
    return user;
  }

  @Post()
  create(user: user) {
    return user;
  }

  @Post()
  signIn(user: user) {
    return user;
  }

  @Post()
  signOut(user: user) {
    return user;
  }

  @Patch()
  update(user: user) {
    return user;
  }

  @Delete()
  remove(user: user) {
    return user;
  }
}
