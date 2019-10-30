import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Grupos } from './grupos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GruposService {

    constructor(
    @InjectRepository(Grupos)
    private readonly gruposRepository: Repository<Grupos>,
    ) {}
    
    findAll(): Promise<Grupos[]> {
    return this.gruposRepository.find();
    } 
    
    async find(id: number): Promise<Grupos[]> {
    return await this.gruposRepository.find({
        where: [{ "id": id }]
    });
    }
    
    async add(grupos: Grupos) {
    return await this.gruposRepository.save(grupos);
    }
    
    async del(grupos: Grupos) {
    return await this.gruposRepository.remove(grupos)
    }
}
