import { Injectable } from '@nestjs/common';
import { Doacoes } from './doacoes.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DoacoesService {

    constructor(
    @InjectRepository(Doacoes)
    private readonly doacoesRepository: Repository<Doacoes>,
    ) {}
    
    findAll(): Promise<Doacoes[]> {
    return this.doacoesRepository.find();
    } 
    
    async find(id: number): Promise<Doacoes[]> {
    return await this.doacoesRepository.find({
        where: [{ "id": id }]
    });
    }
    
    async add(user: Doacoes) {
    return await this.doacoesRepository.save(user);
    }
    
    async del(user: Doacoes) {
    return await this.doacoesRepository.remove(user)
    }


}
