import { Module } from '@nestjs/common';
import { DoacoesCampanhasService } from './doacoes-campanhas.service';
import { DoacoesCampanhasController } from './doacoes-campanhas.controller';
import { DoacoesCampanhas } from './doacoes-campanhas.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([DoacoesCampanhas])
  ],
  providers: [DoacoesCampanhasService],
  controllers: [DoacoesCampanhasController]
})
export class DoacoesCampanhasModule {}
