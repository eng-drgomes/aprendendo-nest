import { Controller, Post, Body, Get } from '@nestjs/common';
import { DoacoesService } from './doacoes.service';
import { Doacoes } from './doacoes.entity';

@Controller('doacoes')
export class DoacoesController {

    constructor(
    private doacoesService: DoacoesService
    ) {}
    
    @Get()
    findAll(){
    return this.doacoesService.findAll();
    }
    
    @Post()
    add(@Body() doacoes: Doacoes){
    return this.doacoesService.add(doacoes);
    }
}
