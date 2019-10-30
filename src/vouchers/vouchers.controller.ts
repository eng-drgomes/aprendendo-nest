import { Controller, Body, Post, Get } from '@nestjs/common';
import { VouchersService } from './vouchers.service';
import { Vouchers } from './vouchers.entity';

@Controller('vouchers')
export class VouchersController {

    constructor(
        private voucherService: VouchersService
     ) {}
     
     @Get()
     findAll(){
        return this.voucherService.findAll();
     }
     
     @Post()
     add(@Body() user: Vouchers){
        return this.voucherService.add(user);
     }
}
