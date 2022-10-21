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
    return await this.userEntity.find().exec();
  }

  async findOne(id: string): Promise<User | null> {
    return this.userEntity.findById(id).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userEntity.findById(id).exec();
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
