import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {

 constructor(
   @InjectRepository(Users)
   private readonly usersRepository: Repository<Users>,
 ) {}
 
 findAll(): Promise<Users[]> {
   return this.usersRepository.find();
 } 

 async find(id: number): Promise<Users[]> {
   return await this.usersRepository.find({
      where: [{ "id": id }]
   });
 }
 
 async add(user: Users) {
   return await this.usersRepository.save(user);
 }

 async del(user: Users) {
   return await this.usersRepository.remove(user)
 }

 async findUser(id) {

  return await
    getRepository(Users)
      .createQueryBuilder("user")
      .where("user.id = :id", { id: id })
      .getOne();
}


}
