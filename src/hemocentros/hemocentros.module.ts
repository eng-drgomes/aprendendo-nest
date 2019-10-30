import { Module } from '@nestjs/common';
import { HemocentrosService } from './hemocentros.service';
import { HemocentrosController } from './hemocentros.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hemocentros } from './hemocentros.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hemocentros])
  ],
  providers: [HemocentrosService],
  controllers: [HemocentrosController]
})
export class HemocentrosModule {}
