import { AutoMap } from '@automapper/classes';

export class UserReadDto {
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
