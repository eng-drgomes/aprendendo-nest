import { Controller, Get, Post, Body } from '@nestjs/common';
import { LocaisService } from './locais.service';
import { Locais } from './locais.entity';

@Controller('locais')
export class LocaisController {

    constructor(
        private locaisService: LocaisService
    ) {}
    
    @Get()
    findAll(){
       return this.locaisService.findAll();
    }
    
    @Post()
    add(@Body() locais: Locais){
       return this.locaisService.add(locais);
    }
}
