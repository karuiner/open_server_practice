import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { user } from './dto/user.dto';
import { puser } from './dto/puser.dto';

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

  @Post('user')
  create(@Body() user: user) {
    if (!this.appService.exist(user.username)) {
      this.appService.newUser(user);
      return 'ok';
    } else {
      throw new HttpException('exist', HttpStatus.BAD_REQUEST);
    }
  }

  @Post('signin')
  signIn(@Body() user: user) {
    if (
      this.appService.exist(user.username) &&
      this.appService.password(user)
    ) {
      this.appService.connect(user.username);
      console.log(user);
      return 'ok';
    } else {
      throw new HttpException('wrong', HttpStatus.BAD_REQUEST);
    }
  }

  @Post('signout')
  signOut(@Body() user: puser) {
    if (this.appService.isConnect(user.username)) {
      this.appService.disconnect(user.username);
      return 'goodbye';
    } else {
      throw new HttpException('wrong', HttpStatus.BAD_REQUEST);
    }
  }

  @Patch('user')
  update(@Body() user: user) {
    if (this.appService.exist(user.username)) {
      this.appService.updateUser(user);
      return 'ok';
    } else {
      throw new HttpException('wrong', HttpStatus.BAD_REQUEST);
    }
  }

  @Delete('user')
  remove(@Body() user: user) {
    if (this.appService.exist(user.username)) {
      this.appService.removeUser(user);
      return 'ok';
    } else {
      throw new HttpException('wrong', HttpStatus.BAD_REQUEST);
    }
  }
}
