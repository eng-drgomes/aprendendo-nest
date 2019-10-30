import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Patologias } from './patologias.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PatologiasService {

    constructor(
        @InjectRepository(Patologias)
        private readonly patologiasRepository: Repository<Patologias>,
      ) {}
      
      findAll(): Promise<Patologias[]> {
        return this.patologiasRepository.find();
      } 
     
      async find(id: number): Promise<Patologias[]> {
        return await this.patologiasRepository.find({
           where: [{ "id": id }]
        });
      }
      
      async add(patologias: Patologias) {
        return await this.patologiasRepository.save(patologias);
      }
     
      async del(patologias: Patologias) {
        return await this.patologiasRepository.remove(patologias)
      }
}
