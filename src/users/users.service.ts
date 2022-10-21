import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserEntity } from 'src/constants';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@Inject(UserEntity) private userEntity: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userEntity(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userEntity.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
