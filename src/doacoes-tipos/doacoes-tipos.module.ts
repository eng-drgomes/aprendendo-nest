import { Module } from '@nestjs/common';
import { DoacoesTiposService } from './doacoes-tipos.service';
import { DoacoesTiposController } from './doacoes-tipos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoacoesTipos } from './doacoes-tipos.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([DoacoesTipos])
  ],
  providers: [DoacoesTiposService],
  controllers: [DoacoesTiposController]
})
export class DoacoesTiposModule {}
