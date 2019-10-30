import { Entity, Column, ManyToOne } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

import { defaultCols } from "../default-cols";
import { Users } from "../users/users.entity";

@Entity()
export class Noticias extends defaultCols {

    @ApiModelProperty()
    @Column('int', { nullable: true })
    @ManyToOne(type => Users, users => users.id)
    users: Users;

    @ApiModelProperty()
    @Column('text')
    titulo: string;

    @ApiModelProperty()
    @Column('text')
    conteudo: string;

    @ApiModelProperty()
    @Column({ type: "int", width: 11 })
    qtdCurtidas: number;

    @ApiModelProperty()
    @Column({ type: "int", width: 11 })
    qtdComentarios: number;

    @ApiModelProperty()
    @Column({ type: "int", width: 11 })
    qtdCompartilhamentos: number;

    @ApiModelProperty()
    @Column("varchar", { length: 50 })
    lagLong: string;

    @ApiModelProperty()
    @Column("varchar", { length: 50 })
    imgCapa: string;

    @ApiModelProperty()
    @Column("varchar", { length: 1 })
    sts: string;

}
