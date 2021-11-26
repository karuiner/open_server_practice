import { PartialType } from '@nestjs/swagger';
import { user } from './user.dto';
export class update extends PartialType(user) {}
