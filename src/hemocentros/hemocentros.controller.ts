import { Controller, Get, Post, Body } from '@nestjs/common';
import { HemocentrosService } from './hemocentros.service';
import { Hemocentros } from './hemocentros.entity';

@Controller('hemocentros')
export class HemocentrosController {

    constructor(
        private hemocentrosService: HemocentrosService
    ) {}
    
    @Get()
    findAll(){
    return this.hemocentrosService.findAll();
    }
    
    @Post()
    add(@Body() hemocentros: Hemocentros){
    return this.hemocentrosService.add(hemocentros);
    }
}
