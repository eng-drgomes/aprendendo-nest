import { Module } from '@nestjs/common';
import { MidiasController } from './midias.controller';
import { MidiasService } from './midias.service';
import { Midias } from './midias.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Midias])
  ],
  controllers: [MidiasController],
  providers: [MidiasService]
})
export class MidiasModule {}
