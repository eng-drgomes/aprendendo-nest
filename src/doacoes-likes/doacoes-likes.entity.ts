import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";

import { ApiModelProperty } from "@nestjs/swagger";
import { Users } from "../users/users.entity";
import { Doacoes } from "../doacoes/doacoes.entity";

@Entity()
export class DoacoesLikes {

    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiModelProperty()
    @Column('int', { nullable: true })
    @ManyToOne(type => Doacoes, doacoes => doacoes.id)
    doacoes: Doacoes;

    @ApiModelProperty()
    @Column('int', { nullable: true })
    @ManyToOne(type => Users, users => users.id)
    users: Users;;

    @CreateDateColumn()
    created: Date;
    
    @UpdateDateColumn()
    updated: Date;
  
    @ApiModelProperty()
    @Column({default:false})
    deleted: boolean
    
}
