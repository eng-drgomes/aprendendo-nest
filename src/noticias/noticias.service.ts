import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Noticias } from './noticias.entity';
import { Repository, getRepository } from 'typeorm';

@Injectable()
export class NoticiasService {

    constructor(
        @InjectRepository(Noticias)
        private readonly noticiasRepository: Repository<Noticias>,
    ) { }

    findAll(): Promise<Noticias[]> {
        return this.noticiasRepository.find();
    }

    async findUser(idUser: number): Promise<Noticias[]> {
        return await this.noticiasRepository.find({
            where: [{ "id": idUser }]
        });
    }    

    async add(noticias: Noticias) {
        return await this.noticiasRepository.save(noticias);
    }






}
