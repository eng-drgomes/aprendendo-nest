import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DoacoesLikes } from './doacoes-likes.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DoacoesLikesService {
    constructor(
        @InjectRepository(DoacoesLikes)
        private readonly doacoesLikesRepository: Repository<DoacoesLikes>,
      ) {}
      
      findAll(): Promise<DoacoesLikes[]> {
        return this.doacoesLikesRepository.find();
      } 
     
      async find(id: number): Promise<DoacoesLikes[]> {
        return await this.doacoesLikesRepository.find({
           where: [{ "id": id }]
        });
      }
      
      async add(doacoesLikes: DoacoesLikes) {
        return await this.doacoesLikesRepository.save(doacoesLikes);
      }
     
      async del(doacoesLikes: DoacoesLikes) {
        return await this.doacoesLikesRepository.remove(doacoesLikes)
    }
}
