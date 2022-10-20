import { createMap, Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { UserReadDto } from 'src/users/dto/user-read.dto';
import { UserCreateDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/Models/user.model';

@Injectable()
export class UserProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper: Mapper) => {
      createMap(mapper, User, UserCreateDto).reverse();
      createMap(mapper, User, UserReadDto).reverse();
    };
  }
}
