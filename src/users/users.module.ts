import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/database/database.module';
import { usersProviders } from './providers/users.providers';
import { UserProfile } from 'src/Profiles/userprofile';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, UserProfile, ...usersProviders],
})
export class UsersModule {}
