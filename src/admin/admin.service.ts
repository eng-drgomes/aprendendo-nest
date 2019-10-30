import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';

@Injectable()
export class AdminService {

    constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
    ) {}
    
    findAll(): Promise<Admin[]> {
    return this.adminRepository.find();
    } 
    
    async find(_id: number): Promise<Admin[]> {
    return await this.adminRepository.find({
        where: [{ "id": _id }]
    });
    }
    
    async add(admin: Admin) {
    return await this.adminRepository.save(admin);
    }
    
    async del(admin: Admin) {
    return await this.adminRepository.remove(admin)
    }
}
