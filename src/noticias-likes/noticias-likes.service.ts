import { Injectable } from '@nestjs/common';
import { NoticiasLikes } from './noticias-likes.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NoticiasLikesService {

    constructor(
        @InjectRepository(NoticiasLikes)
        private readonly noticiasLikes: Repository<NoticiasLikes>,
      ) {}
      
      findAll(): Promise<NoticiasLikes[]> {
        return this.noticiasLikes.find();
      } 
     
      //async find(id: number): Promise<NoticiasLikes[]> {
      //  return await this.noticiasLikes.find({
      //     where: [{ "id": id }]
      //  });
      //}
      
      async add(noticiasLikes: NoticiasLikes) {
        return await this.noticiasLikes.save(noticiasLikes);
      }
     
      //async del(noticiasLikes: NoticiasLikes) {
      //  return await this.noticiasLikes.remove(noticiasLikes)
      //}
     
       //async findUser(id) {
     //
       //    return await
       //      getRepository(NoticiasLikes)
       //        .createQueryBuilder("user")
       //        .where("user.id = :id", { id: id })
       //        .getOne();
       //}
//




}
