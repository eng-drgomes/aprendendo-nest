import { Controller, Get, Post, Body } from '@nestjs/common';
import { DoacoesCampanhasService } from './doacoes-campanhas.service';
import { DoacoesCampanhas } from './doacoes-campanhas.entity';

@Controller('doacoes-campanhas')
export class DoacoesCampanhasController {
    constructor(
        private doacoesCampanhaService: DoacoesCampanhasService
     ) {}
     
     @Get()
     findAll(){
        return this.doacoesCampanhaService.findAll();
     }
     
     @Post()
     add(@Body() doacoesCampanhas: DoacoesCampanhas){
        return this.doacoesCampanhaService.add(doacoesCampanhas);
     }

}
