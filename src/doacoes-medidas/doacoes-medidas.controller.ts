import { Controller, Get, Post, Body } from '@nestjs/common';
import { DoacoesMedidasService } from './doacoes-medidas.service';
import { DoacoesMedidas } from './doacoes-medidas.entity';

@Controller('doacoes-medidas')
export class DoacoesMedidasController {

    constructor(
    private doacoesMedidasService: DoacoesMedidasService
    ) {}
    
    @Get()
    findAll(){
    return this.doacoesMedidasService.findAll();
    }
    
    @Post()
    add(@Body() doacoesMedidas: DoacoesMedidas){
    return this.doacoesMedidasService.add(doacoesMedidas);
    }
}
