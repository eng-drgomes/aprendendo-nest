import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DoacoesComentarios } from './doacoes-comentarios.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DoacoesComentariosService {
    constructor(
        @InjectRepository(DoacoesComentarios)
        private readonly doacoesComentariosRepository: Repository<DoacoesComentarios>,
      ) {}
      
      findAll(): Promise<DoacoesComentarios[]> {
        return this.doacoesComentariosRepository.find();
      } 
     
      async find(id: number): Promise<DoacoesComentarios[]> {
        return await this.doacoesComentariosRepository.find({
           where: [{ "id": id }]
        });
      }
      
      async add(doacoesComentarios: DoacoesComentarios) {
        return await this.doacoesComentariosRepository.save(doacoesComentarios);
      }
     
      async del(user: DoacoesComentarios) {
        return await this.doacoesComentariosRepository.remove(user)
      }
}
