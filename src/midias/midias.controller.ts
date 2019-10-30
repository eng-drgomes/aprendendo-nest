import { Controller, Get, Post, Body } from '@nestjs/common';
import { MidiasService } from './midias.service';
import { Midias } from './midias.entity';

@Controller('midias')
export class MidiasController {

    constructor(
        private midiasService: MidiasService
     ) {}
     
     @Get()
     findAll(){
        return this.midiasService.findAll();
     }
     
     @Post()
     add(@Body() midias: Midias){
        return this.midiasService.add(midias);
     }





}
