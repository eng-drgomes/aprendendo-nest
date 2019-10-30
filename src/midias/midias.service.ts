import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Midias } from './midias.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MidiasService {

    constructor(
    @InjectRepository(Midias)
    private readonly midiasRepository: Repository<Midias>,
    ) {}
    
    findAll(): Promise<Midias[]> {
    return this.midiasRepository.find();
    } 
    
    async find(_id: number): Promise<Midias[]> {
    return await this.midiasRepository.find({
        where: [{ "id": _id }]
    });
    }
    
    async add(midias: Midias) {
    return await this.midiasRepository.save(midias);
    }
    
    async del(midias: Midias) {
    return await this.midiasRepository.remove(midias)
    }

}
