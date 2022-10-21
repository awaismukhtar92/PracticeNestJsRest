import { AutoMap } from '@automapper/classes';
import { Document } from 'mongoose';
export class User extends Document {
  @AutoMap()
  name: string;
  @AutoMap()
  email: string;
  @AutoMap()
  password: string;
  @AutoMap()
  address: string;
  @AutoMap()
  phone: string;
  @AutoMap()
  gender: string;
}
