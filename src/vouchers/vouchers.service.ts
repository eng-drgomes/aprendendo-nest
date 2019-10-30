import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vouchers } from './vouchers.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VouchersService {

    constructor(
        @InjectRepository(Vouchers)
        private readonly usersRepository: Repository<Vouchers>,
      ) {}
      
      findAll(): Promise<Vouchers[]> {
        return this.usersRepository.find();
      } 
     
      async find(id: number): Promise<Vouchers[]> {
        return await this.usersRepository.find({
           where: [{ "id": id }]
        });
      }
      
      async add(vouchers: Vouchers) {
        return await this.usersRepository.save(vouchers);
      }
     
      async del(vouchers: Vouchers) {
        return await this.usersRepository.remove(vouchers)
      }
}
