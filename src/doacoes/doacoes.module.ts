import { Module } from '@nestjs/common';
import { DoacoesService } from './doacoes.service';
import { DoacoesController } from './doacoes.controller';
import { Doacoes } from './doacoes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Doacoes])
  ],
  providers: [DoacoesService],
  controllers: [DoacoesController]
})
export class DoacoesModule {}
