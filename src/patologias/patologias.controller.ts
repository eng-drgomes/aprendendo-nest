import { Controller, Get, Post, Body } from '@nestjs/common';
import { PatologiasService } from './patologias.service';
import { Patologias } from './patologias.entity';

@Controller('patologias')
export class PatologiasController {

    constructor(
        private patologiasService: PatologiasService
     ) {}
     
     @Get()
     findAll(){
        return this.patologiasService.findAll();
     }
     
     @Post()
     add(@Body() patologias: Patologias){
        return this.patologiasService.add(patologias);
     }
}
