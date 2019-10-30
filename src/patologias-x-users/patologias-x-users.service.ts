import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PatologiasXUsers } from './patologias-x-users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PatologiasXUsersService {

    constructor(
        @InjectRepository(PatologiasXUsers)
        private readonly patologiasXUsersRepository: Repository<PatologiasXUsers>,
    ) {}
    
    findAll(): Promise<PatologiasXUsers[]> {
    return this.patologiasXUsersRepository.find();
    } 
     
    async find(id: number): Promise<PatologiasXUsers[]> {
    return await this.patologiasXUsersRepository.find({
        where: [{ "id": id }]
    });
    }
    
    async add(patologiasXUsers: PatologiasXUsers) {
    return await this.patologiasXUsersRepository.save(patologiasXUsers);
    }
     
    async del(patologiasXUsers: PatologiasXUsers) {
    return await this.patologiasXUsersRepository.remove(patologiasXUsers)
    }
}
