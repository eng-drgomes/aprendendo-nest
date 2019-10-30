import { Module } from '@nestjs/common';
import { PatologiasService } from './patologias.service';
import { PatologiasController } from './patologias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patologias } from './patologias.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Patologias])
  ],
  providers: [PatologiasService],
  controllers: [PatologiasController]
})
export class PatologiasModule {}
