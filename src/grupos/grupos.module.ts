import { Module } from '@nestjs/common';
import { GruposService } from './grupos.service';
import { GruposController } from './grupos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grupos } from './grupos.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Grupos])
  ],
  providers: [GruposService],
  controllers: [GruposController]
})
export class GruposModule {}
