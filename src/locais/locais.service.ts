import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Locais } from './locais.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LocaisService {

    constructor(
    @InjectRepository(Locais)
    private readonly locaisRepository: Repository<Locais>,
    ) {}
    
    findAll(): Promise<Locais[]> {
    return this.locaisRepository.find();
    } 
    
    async find(_id: number): Promise<Locais[]> {
    return await this.locaisRepository.find({
        where: [{ "id": _id }]
    });
    }
    
    async add(locais: Locais) {
    return await this.locaisRepository.save(locais);
    }
    
    async del(locais: Locais) {
    return await this.locaisRepository.remove(locais)
    }
}
