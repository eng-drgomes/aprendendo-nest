import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DoacoesCampanhas } from './doacoes-campanhas.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DoacoesCampanhasService {

    constructor(
        @InjectRepository(DoacoesCampanhas)
        private readonly usersRepository: Repository<DoacoesCampanhas>,
      ) {}
      
      findAll(): Promise<DoacoesCampanhas[]> {
        return this.usersRepository.find();
      } 
     
      async find(id: number): Promise<DoacoesCampanhas[]> {
        return await this.usersRepository.find({
           where: [{ "id": id }]
        });
      }
      
      async add(doacoesCampanhas: DoacoesCampanhas) {
        return await this.usersRepository.save(doacoesCampanhas);
      }
     
      async del(doacoesCampanhas: DoacoesCampanhas) {
        return await this.usersRepository.remove(doacoesCampanhas)
      }
}
