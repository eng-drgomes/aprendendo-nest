import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Farmacias } from './farmacias.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FarmaciasService {

    constructor(
        @InjectRepository(Farmacias)
        private readonly farmaciasRepository: Repository<Farmacias>,
    ) {}
      
    findAll(): Promise<Farmacias[]> {
    return this.farmaciasRepository.find();
    } 
    
    async find(id: number): Promise<Farmacias[]> {
    return await this.farmaciasRepository.find({
        where: [{ "id": id }]
    });
    }
    
    async add(farmacias: Farmacias) {
    return await this.farmaciasRepository.save(farmacias);
    }
    
    async del(farmacias: Farmacias) {
    return await this.farmaciasRepository.remove(farmacias)
    }
}
