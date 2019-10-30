import { Controller, Get, Post, Body } from '@nestjs/common';
import { DoacoesCategoriasService } from './doacoes-categorias.service';
import { DoacoesCategorias } from './doacoes-categorias.entity';

@Controller('doacoes-categorias')
export class DoacoesCategoriasController {

    constructor(
        private doacoesCategoriasService: DoacoesCategoriasService
     ) {}
     
     @Get()
     findAll(){
        return this.doacoesCategoriasService.findAll();
     }
     
     @Post()
     add(@Body() doacoesCategorias: DoacoesCategorias){
        return this.doacoesCategoriasService.add(doacoesCategorias);
     }
}
