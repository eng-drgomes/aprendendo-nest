import { Module } from '@nestjs/common';
import { DoacoesMedidasService } from './doacoes-medidas.service';
import { DoacoesMedidasController } from './doacoes-medidas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoacoesMedidas } from './doacoes-medidas.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([DoacoesMedidas])
  ],
  providers: [DoacoesMedidasService],
  controllers: [DoacoesMedidasController]
})
export class DoacoesMedidasModule {}
