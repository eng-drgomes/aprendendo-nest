import { Controller, Get, Post, Body } from '@nestjs/common';
import { DoacoesLikesService } from './doacoes-likes.service';
import { DoacoesLikes } from './doacoes-likes.entity';

@Controller('doacoes-likes')
export class DoacoesLikesController {
    constructor(
    private doacoesLikesService: DoacoesLikesService
    ) {}
    
    @Get()
    findAll(){
    return this.doacoesLikesService.findAll();
    }
    
    @Post()
    add(@Body() doacoesLikes: DoacoesLikes){
    return this.doacoesLikesService.add(doacoesLikes);
    }
}
