import { Module } from '@nestjs/common';
import { NoticiasController } from './noticias.controller';
import { NoticiasService } from './noticias.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Noticias } from './noticias.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Noticias])],
  controllers: [NoticiasController],
  providers: [NoticiasService]
})
export class NoticiasModule {}
