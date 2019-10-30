import { Controller, Post, Body, Get } from '@nestjs/common';
import { GruposService } from './grupos.service';
import { Grupos } from './grupos.entity';

@Controller('grupos')
export class GruposController {


    constructor(
    private gruposService: GruposService 
    ) {}
    
    @Get()
    findAll(){
    return this.gruposService.findAll();
    }
    
    @Post()
    add(@Body() grupos: Grupos){
    return this.gruposService.add(grupos);
    }
}
