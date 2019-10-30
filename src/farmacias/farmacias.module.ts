import { Module } from '@nestjs/common';
import { FarmaciasService } from './farmacias.service';
import { FarmaciasController } from './farmacias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Farmacias } from './farmacias.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Farmacias])
  ],
  providers: [FarmaciasService],
  controllers: [FarmaciasController]
})
export class FarmaciasModule {}
