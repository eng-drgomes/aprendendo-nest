import { Entity, Column, OneToOne } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

import { defaultCols } from "../default-cols";
import { Grupos } from "../grupos/grupos.entity";

@Entity()
export class Admin extends defaultCols {

    @ApiModelProperty()
    @Column('int', { nullable: true })
    @OneToOne(type => Grupos, grupos => grupos.id)
    grupos: Grupos;
    
    @ApiModelProperty()
    @Column("varchar", { length: 100 })
    nome: string;

    @ApiModelProperty()
    @Column("varchar", { length: 100 })
    usuario: string;

    @ApiModelProperty()
    @Column("varchar", { length: 100 })
    senha: string;
    
    @ApiModelProperty()
    @Column('text')
    token: string;

    @ApiModelProperty()
    @Column("varchar", { length: 1 })
    sts: string;

}
