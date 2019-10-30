import { Entity, Column, OneToMany } from "typeorm";
import { ApiModelProperty } from '@nestjs/swagger';

import { defaultCols } from "../default-cols";
import { Users } from "../users/users.entity";
import { Noticias } from "../noticias/noticias.entity";

@Entity()
export class NoticiasComentarios extends defaultCols {

    @ApiModelProperty()
    @Column('int', { nullable: true })
    @OneToMany(type => Users, users => users.id)
    users: Users;

    @ApiModelProperty()
    @Column('int', { nullable: true })
    @OneToMany(type => Noticias, noticias => noticias.id)
    noticias: Noticias;
    
    @ApiModelProperty()
    @Column('text')
    comentario: string;
    
}
