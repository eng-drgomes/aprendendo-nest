import { Controller, Get, Post, Body } from '@nestjs/common';
import { NoticiasService } from './noticias.service';
import { Noticias } from './noticias.entity';

@Controller('noticias')
export class NoticiasController {
    
    constructor(
        private noticiasService: NoticiasService,

    ) { }

    @Get()
    findAll() {
        return this.noticiasService.findAll();
    }

    @Post('find/user')
    findUser(@Body() idUser) {
        return this.noticiasService.findUser(idUser);
        
    }

    @Post()
    add(@Body() noticias: Noticias) {
        return this.noticiasService.add(noticias);
    }


    



}
