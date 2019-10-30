import { PrimaryGeneratedColumn, Entity, Column, OneToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

import { Noticias } from "../noticias/noticias.entity";
import { Users } from "../users/users.entity";

@Entity()
export class NoticiasLikes {
    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiModelProperty()
    @Column('int', { nullable: true })
    @OneToOne(type => Noticias, noticias => noticias.id)
    noticias: Noticias;

    @ApiModelProperty()
    @Column('int', { nullable: true })
    @OneToOne(type => Users, users => users.id)
    users: Users;

    @CreateDateColumn()
    created: Date;
    
    @UpdateDateColumn()
    updated: Date;
  
    @ApiModelProperty()
    @Column({default:false})
    deleted: boolean

}
