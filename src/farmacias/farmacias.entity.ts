import { Entity, Column, OneToOne } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

import { defaultCols } from "../default-cols";
import { Users } from "../users/users.entity";

@Entity()
export class Farmacias extends defaultCols {

    @ApiModelProperty()
    @Column("varchar", { length: 50 })
    nome: string;

    @ApiModelProperty()
    @Column("varchar", { length: 250 })
    razao_social: string;

    @ApiModelProperty()
    @Column("varchar", { length: 250 })
    responsavel: string;
    
    @ApiModelProperty()
    @Column("varchar", { length: 250 })
    logradouro: string;

    @ApiModelProperty()
    @Column({type: 'int',  width: 5 })
    numero: number;

    @ApiModelProperty()
    @Column("varchar", { length: 45 })
    bairro: string;

    @ApiModelProperty()
    @Column({type: 'int',  width: 11 })
    id_municipio: number;

    @ApiModelProperty()
    @Column("varchar", { length: 15 })
    cep: string;

    @ApiModelProperty()
    @Column('int', { nullable: true })
    @OneToOne(type => Users, users => users.id)
    users: Users;   

    @ApiModelProperty()
    @Column({type: 'int',  width: 1 })
    ativo: number;

}
