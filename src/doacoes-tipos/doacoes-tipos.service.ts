import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DoacoesTipos } from './doacoes-tipos.entity';

@Injectable()
export class DoacoesTiposService {

constructor(
    @InjectRepository(DoacoesTipos)
    private readonly doacoesTiposRepository: Repository<DoacoesTipos>,
    ) {}
    
    findAll(): Promise<DoacoesTipos[]> {
    return this.doacoesTiposRepository.find();
    } 
    
    async find(id: number): Promise<DoacoesTipos[]> {
    return await this.doacoesTiposRepository.find({
        where: [{ "id": id }]
    });
    }
    
    async add(doacoesTipos: DoacoesTipos) {
    return await this.doacoesTiposRepository.save(doacoesTipos);
    }
    
    async del(doacoesTipos: DoacoesTipos) {
    return await this.doacoesTiposRepository.remove(doacoesTipos)
    }

}
