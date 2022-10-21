import { Connection } from 'mongoose';
import { DatabaseConnection, UserEntity } from 'src/constants';
import { UserSchema } from '../../schemas/user.schema';
import { User } from '../entities/user.entity';

export const usersProviders = [
  {
    provide: UserEntity,
    useFactory: (connection: Connection) =>
      connection.model(User.name, UserSchema),
    inject: [DatabaseConnection],
  },
];
