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
    if (!this.appService.exist(user)) {
      this.appService.newUser(user);
      return 'ok';
    } else {
      throw new HttpException('exist', HttpStatus.BAD_REQUEST);
    }
  }

  @Post('signin')
  signIn(@Body() user: user) {
    if (this.appService.exist(user) && this.appService.password(user)) {
      this.appService.connect(user);

      return 'ok';
    } else {
      throw new HttpException('wrong', HttpStatus.BAD_REQUEST);
    }
  }

  @Post('signout')
  signOut(@Body() user: user) {
    if (this.appService.isConnect(user)) {
      this.appService.disconnect(user);
      return 'goodbye';
    } else {
      throw new HttpException('wrong', HttpStatus.BAD_REQUEST);
    }
  }

  @Patch('user')
  update(@Body() user: user) {
    if (this.appService.exist(user)) {
      this.appService.updateUser(user);
      return 'ok';
    } else {
      throw new HttpException('wrong', HttpStatus.BAD_REQUEST);
    }
  }

  @Delete('user')
  remove(@Body() user: user) {
    if (this.appService.exist(user)) {
      this.appService.removeUser(user);
      return 'ok';
    } else {
      throw new HttpException('wrong', HttpStatus.BAD_REQUEST);
    }
  }
}
