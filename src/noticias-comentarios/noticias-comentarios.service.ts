import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NoticiasComentarios } from './noticias-comentarios.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NoticiasComentariosService {

    constructor(
        @InjectRepository(NoticiasComentarios)
        private readonly noticiasComentariosRepository: Repository<NoticiasComentarios>,
    ) { }

    findAll(): Promise<NoticiasComentarios[]> {
        return this.noticiasComentariosRepository.find();
    }

    async find(_id: number): Promise<NoticiasComentarios[]> {
        return await this.noticiasComentariosRepository.find({
            where: [{ "id": _id }]
        });
    }    

    async add(noticiasComentarios: NoticiasComentarios) {
        return await this.noticiasComentariosRepository.save(noticiasComentarios);
    }

    
}
