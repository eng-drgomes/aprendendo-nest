import { Module } from '@nestjs/common';
import { PatologiasXUsersService } from './patologias-x-users.service';
import { PatologiasXUsersController } from './patologias-x-users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatologiasXUsers } from './patologias-x-users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PatologiasXUsers])
  ],
  providers: [PatologiasXUsersService],
  controllers: [PatologiasXUsersController]
})
export class PatologiasXUsersModule {}
