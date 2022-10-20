import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserCreateDto } from './dto/create-user.dto';
import { UserReadDto } from './dto/user-read.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  @Post()
  async create(@Body() createUserDto: UserCreateDto): Promise<UserReadDto> {
    const user = await this.usersService.create(createUserDto);
    console.log(user);
    return this.mapper.map(user, User, UserReadDto);
  }

  @Get()
  async findAll(): Promise<UserReadDto[]> {
    const users = this.usersService.findAll();
    return this.mapper.mapArray(users, User, UserReadDto);
  }
}
