import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DoacoesMedidas } from './doacoes-medidas.entity';

@Injectable()
export class DoacoesMedidasService {

    constructor(
        @InjectRepository(DoacoesMedidas)
        private readonly doacoesMedidasRepository: Repository<DoacoesMedidas>,
      ) {}
      
      findAll(): Promise<DoacoesMedidas[]> {
        return this.doacoesMedidasRepository.find();
      } 
     
      async find(id: number): Promise<DoacoesMedidas[]> {
        return await this.doacoesMedidasRepository.find({
           where: [{ "id": id }]
        });
      }
      
      async add(doacoesMedidas: DoacoesMedidas) {
        return await this.doacoesMedidasRepository.save(doacoesMedidas);
      }
     
      async del(doacoesMedidas: DoacoesMedidas) {
        return await this.doacoesMedidasRepository.remove(doacoesMedidas)
      }
}
