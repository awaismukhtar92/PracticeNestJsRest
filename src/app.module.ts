import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
  ],
})
export class AppModule {}
