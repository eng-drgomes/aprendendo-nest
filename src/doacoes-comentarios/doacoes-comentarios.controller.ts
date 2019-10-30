import { Controller, Get, Post, Body } from '@nestjs/common';
import { DoacoesComentariosService } from './doacoes-comentarios.service';
import { DoacoesComentarios } from './doacoes-comentarios.entity';

@Controller('doacoes-comentarios')
export class DoacoesComentariosController {

    constructor(
        private doacoesComentariosService: DoacoesComentariosService
     ) {}
     
     @Get()
     findAll(){
        return this.doacoesComentariosService.findAll();
     }
     
     @Post()
     add(@Body() dacoesComentarios: DoacoesComentarios){
        return this.doacoesComentariosService.add(dacoesComentarios);
     }
}
