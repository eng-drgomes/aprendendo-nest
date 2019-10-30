import { Module } from '@nestjs/common';
import { DoacoesComentariosService } from './doacoes-comentarios.service';
import { DoacoesComentariosController } from './doacoes-comentarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoacoesComentarios } from './doacoes-comentarios.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([DoacoesComentarios])
  ],
  providers: [DoacoesComentariosService],
  controllers: [DoacoesComentariosController]
})
export class DoacoesComentariosModule {}
