import { Module } from '@nestjs/common';
import { NoticiasComentariosController } from './noticias-comentarios.controller';
import { NoticiasComentariosService } from './noticias-comentarios.service';
import { NoticiasComentarios } from './noticias-comentarios.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([NoticiasComentarios])],
  controllers: [NoticiasComentariosController],
  providers: [NoticiasComentariosService]
})
export class NoticiasComentariosModule {}
