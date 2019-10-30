import { Controller, Get, Post, Body } from '@nestjs/common';
import { NoticiasLikesService } from './noticias-likes.service';

import { NoticiasLikes } from './noticias-likes.entity';


@Controller('noticias-likes')
export class NoticiasLikesController {

   constructor(
      private noticiasLikesService: NoticiasLikesService
   ) {}
   
   @Get()
   findAll(){
      return this.noticiasLikesService.findAll();
   }
   
   @Post()
   add(@Body() noticiasLikes: NoticiasLikes){
      return this.noticiasLikesService.add(noticiasLikes);
   }

   //@Get(':id')
   //find(@Body() id: number){
   //   return this.noticiasLikesService.find(id);
   //}

   //@Get()
   // findUser(@Body() id) {
   //    return this.noticiasLikesService.findUser(id);
   //     
   // } 
}
