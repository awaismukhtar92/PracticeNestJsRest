import { AutoMap } from '@automapper/classes';

export class User {
  @AutoMap()
  userId: number;
  @AutoMap()
  name: string;
  @AutoMap()
  age: number;
  @AutoMap()
  address: string;
  @AutoMap()
  gender: string;
}
