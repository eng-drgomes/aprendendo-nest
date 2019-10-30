import { Module } from '@nestjs/common';
import { LocaisController } from './locais.controller';
import { LocaisService } from './locais.service';
import { Locais } from './locais.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Locais])
  ],
  controllers: [LocaisController],
  providers: [LocaisService]
})
export class LocaisModule {}
