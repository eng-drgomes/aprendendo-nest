import { Module } from '@nestjs/common';
import { DoacoesCategoriasService } from './doacoes-categorias.service';
import { DoacoesCategoriasController } from './doacoes-categorias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoacoesCategorias } from './doacoes-categorias.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([DoacoesCategorias])
  ],
  providers: [DoacoesCategoriasService],
  controllers: [DoacoesCategoriasController]
})
export class DoacoesCategoriasModule {}
