import { Controller, Post, Body, Get } from '@nestjs/common';
import { FarmaciasService } from './farmacias.service';
import { Farmacias } from './farmacias.entity';

@Controller('farmacias')
export class FarmaciasController {

    constructor(
        private farmaciasService: FarmaciasService
     ) {}
     
     @Get()
     findAll(){
        return this.farmaciasService.findAll();
     }
     
     @Post()
     add(@Body() user: Farmacias){
        return this.farmaciasService.add(user);
     }
}
