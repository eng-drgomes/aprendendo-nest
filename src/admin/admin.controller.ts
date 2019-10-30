import { Controller, Get, Post, Body } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from './admin.entity';


@Controller('admin')
export class AdminController {

    constructor(
    private adminService: AdminService
    ) {}
    
    @Get()
    findAll(){
    return this.adminService.findAll();
    }
    
    @Post()
    add(@Body() admin: Admin){
    return this.adminService.add(admin);
    }
}
