import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class UserCreateDto {
  @AutoMap()
  @ApiProperty()
  name: string;
  @AutoMap()
  @ApiProperty()
  age: number;
  @AutoMap()
  @ApiProperty()
  address: string;
  @AutoMap()
  @ApiProperty()
  gender: string;
}
