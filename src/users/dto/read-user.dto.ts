import { AutoMap } from '@automapper/classes';

export class ReadUserDto {
  @AutoMap()
  _id: string;
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
