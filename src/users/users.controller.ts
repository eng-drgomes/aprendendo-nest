import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';


@Controller('users')
export class UsersController {

   constructor(
      private usersService: UsersService
   ) {}
   
   @Get()
   findAll(){
      return this.usersService.findAll();
   }
   
   @Post()
   add(@Body() user: Users){
      return this.usersService.add(user);
   }


}
