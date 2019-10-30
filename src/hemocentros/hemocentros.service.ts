import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hemocentros } from './hemocentros.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HemocentrosService {
    constructor(
        @InjectRepository(Hemocentros)
        private readonly hemocentrosRepository: Repository<Hemocentros>,
      ) {}
      
      findAll(): Promise<Hemocentros[]> {
        return this.hemocentrosRepository.find();
      } 
     
      async find(id: number): Promise<Hemocentros[]> {
        return await this.hemocentrosRepository.find({
           where: [{ "id": id }]
        });
      }
      
      async add(hemocentros: Hemocentros) {
        return await this.hemocentrosRepository.save(hemocentros);
      }
     
      async del(hemocentros: Hemocentros) {
        return await this.hemocentrosRepository.remove(hemocentros)
      }
}
