import { Module } from '@nestjs/common';
import { NoticiasLikesService } from './noticias-likes.service';
import { NoticiasLikesController } from './noticias-likes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoticiasLikes } from './noticias-likes.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([NoticiasLikes])
  ],
  providers: [NoticiasLikesService],
  controllers: [NoticiasLikesController]
})
export class NoticiasLikesModule {}
