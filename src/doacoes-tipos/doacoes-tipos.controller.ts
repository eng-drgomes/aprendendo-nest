import { Controller, Get, Post, Body } from '@nestjs/common';
import { DoacoesTiposService } from './doacoes-tipos.service';
import { DoacoesTipos } from './doacoes-tipos.entity';

@Controller('doacoes-tipos')
export class DoacoesTiposController {

    constructor(
        private doacoesTiposService: DoacoesTiposService
     ) {}
     
     @Get()
     findAll(){
        return this.doacoesTiposService.findAll();
     }
     
     @Post()
     add(@Body() doacoesTipos: DoacoesTipos){
        return this.doacoesTiposService.add(doacoesTipos);
     }
}
