import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DoacoesCategorias } from './doacoes-categorias.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DoacoesCategoriasService {

    constructor(
        @InjectRepository(DoacoesCategorias)
        private readonly doacoesCategoriasRepository: Repository<DoacoesCategorias>,
      ) {}
      
      findAll(): Promise<DoacoesCategorias[]> {
        return this.doacoesCategoriasRepository.find();
      } 
     
      async find(id: number): Promise<DoacoesCategorias[]> {
        return await this.doacoesCategoriasRepository.find({
           where: [{ "id": id }]
        });
      }
      
      async add(doacoesCategorias: DoacoesCategorias) {
        return await this.doacoesCategoriasRepository.save(user);
      }
     
      async del(doacoesCategorias: DoacoesCategorias) {
        return await this.doacoesCategoriasRepository.remove(user)
      }
}
