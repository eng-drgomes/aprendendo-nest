import { Controller, Get, Post, Body } from '@nestjs/common';
import { NoticiasComentariosService } from './noticias-comentarios.service';
import { NoticiasComentarios } from './noticias-comentarios.entity';

@Controller('noticias-comentarios')
export class NoticiasComentariosController {

    constructor(
        private noticiasComentariosService: NoticiasComentariosService,

    ) { }

    @Get()
    findAll() {
        return this.noticiasComentariosService.findAll();
    }

    @Post()
    add(@Body() noticiasComentarios: NoticiasComentarios) {
        return this.noticiasComentariosService.add(noticiasComentarios);
    }



}
