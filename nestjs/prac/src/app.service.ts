import { Body, Injectable } from '@nestjs/common';
import { user } from './interface/user';

@Injectable()
export class AppService {
  private readonly users = {};
  private readonly on = {};

  getHello(): string {
    return 'Hello World!';
  }

  exist(user: user) {
    return this.users[user.username] !== undefined;
  }

  isConnect(user: user) {
    return this.on[user.username] !== undefined;
  }

  connect(user: user) {
    this.on[user.username] = true;
  }

  disconnect(user: user) {
    delete this.on[user.username];
  }

  password(user: user) {
    return this.users[user.username] === user.password;
  }

  newUser(user: user) {
    this.users[user.username] = user.password;
  }

  removeUser(user: user) {
    delete this.users[user.username];
  }

  updateUser(user: user) {
    this.users[user.username] = user.password;
  }
}
