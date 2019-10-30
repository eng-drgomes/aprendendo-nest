import { Entity, Column, ManyToOne } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

import { defaultCols } from "../default-cols";
import { Users } from "../users/users.entity";
import { Doacoes } from "../doacoes/doacoes.entity";

@Entity()
export class DoacoesComentarios extends defaultCols {

    @ApiModelProperty()
    @Column('int', { nullable: true })
    @ManyToOne(type => Doacoes, doacoes => doacoes.id)
    doacoes: Doacoes;

    @ApiModelProperty()
    @Column('int', { nullable: true })
    @ManyToOne(type => Users, users => users.id)
    users: Users;
    
    @ApiModelProperty()
    @Column('text')
    comentario: string;

}
