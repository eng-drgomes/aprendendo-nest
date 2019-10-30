import { Controller, Post, Body, Get } from '@nestjs/common';
import { PatologiasXUsersService } from './patologias-x-users.service';
import { PatologiasXUsers } from './patologias-x-users.entity';

@Controller('patologias-x-users')
export class PatologiasXUsersController {

    constructor(
        private patologiasXUsersService: PatologiasXUsersService
     ) {}
     
     @Get()
     findAll(){
        return this.patologiasXUsersService.findAll();
     }
     
     @Post()
     add(@Body() patologiasXUsers: PatologiasXUsers){
        return this.patologiasXUsersService.add(patologiasXUsers);
     }
}
