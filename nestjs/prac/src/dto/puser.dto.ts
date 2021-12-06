import { PartialType } from '@nestjs/swagger';
import { user } from './user.dto';
export class puser extends PartialType(user) {}
