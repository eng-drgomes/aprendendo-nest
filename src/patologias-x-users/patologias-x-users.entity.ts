import { Entity, Column, OneToMany, OneToOne } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

import { defaultCols } from "../default-cols";
import { Users } from "../users/users.entity";
import { Patologias } from "../patologias/patologias.entity";

@Entity()
export class PatologiasXUsers extends defaultCols {

    @ApiModelProperty()
    @Column('int', { nullable: true })
    @OneToMany(type => Users, users => users.id)
    users: Users;

    @ApiModelProperty()
    @Column('int', { nullable: true })
    @OneToOne(type => Patologias, patologias => patologias.id)
    patologias: Patologias;

    @ApiModelProperty()
    @Column("varchar", { length: 1 })
    sts: string;
}
