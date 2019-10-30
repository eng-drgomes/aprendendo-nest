import { Entity, Column, ManyToOne } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

import { defaultCols } from "../default-cols";
import { Users } from "../users/users.entity";

@Entity()
export class Locais extends defaultCols {

    @ApiModelProperty()
    @Column('int', { nullable: true })
    @ManyToOne(type => Users, users => users.id)
    users: Users;

    @ApiModelProperty()
    @Column("varchar", { length: 50 })
    nome: string;

    @ApiModelProperty()
    @Column("varchar", { length: 9 })
    cep: string;

    @ApiModelProperty()
    @Column("varchar", { length: 250 })
    logradouro: string;

    @ApiModelProperty()
    @Column({ type: "int", width: 5 })
    numero: number;

    @ApiModelProperty()
    @Column("varchar", { length: 50 })
    bairro: string;

    @ApiModelProperty()
    @Column("varchar", { length: 50 })
    localidade: string;

    @ApiModelProperty()
    @Column("varchar", { length: 50 })
    uf: string;

    @ApiModelProperty()
    @Column("varchar", { length: 50 })
    complemento: string;

    @ApiModelProperty()
    @Column("varchar", { length: 1 })
    ativo: string;

}
