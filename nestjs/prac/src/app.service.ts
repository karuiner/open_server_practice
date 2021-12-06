import { Body, Injectable } from '@nestjs/common';
import { user } from './interface/user';

@Injectable()
export class AppService {
  private readonly users = {};
  private readonly on = {};

  getHello(): string {
    return 'Hello World!';
  }

  exist(username: string) {
    console.log(this.users[username]);
    return this.users[username] !== undefined;
  }

  isConnect(username: string) {
    console.log(this.on);
    return this.on[username] !== undefined;
  }

  connect(username: string) {
    this.on[username] = true;
  }

  disconnect(username: string) {
    delete this.on[username];
  }

  password(user: user) {
    return this.users[user.username] === user.password;
  }

  newUser(user: user) {
    this.users[user.username] = user.password;
    console.log(this.users);
  }

  removeUser(user: user) {
    delete this.users[user.username];
  }

  updateUser(user: user) {
    this.users[user.username] = user.password;
  }
}
