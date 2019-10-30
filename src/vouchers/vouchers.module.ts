import { Module } from '@nestjs/common';
import { VouchersService } from './vouchers.service';
import { VouchersController } from './vouchers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vouchers } from './vouchers.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Vouchers])
  ],
  providers: [VouchersService],
  controllers: [VouchersController]
})
export class VouchersModule {}
