import { Module } from '@nestjs/common';
import { DoacoesLikesService } from './doacoes-likes.service';
import { DoacoesLikesController } from './doacoes-likes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoacoesLikes } from './doacoes-likes.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([DoacoesLikes])
  ],
  providers: [DoacoesLikesService],
  controllers: [DoacoesLikesController]
})
export class DoacoesLikesModule {}
