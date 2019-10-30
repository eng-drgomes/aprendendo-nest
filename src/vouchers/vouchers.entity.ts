import { Entity, Column, OneToMany } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

import { defaultCols } from "../default-cols";
import { Users } from "../users/users.entity";


@Entity()
export class Vouchers extends defaultCols {

    @ApiModelProperty()
    @Column('int', { nullable: true })
    @OneToMany(type => Users, users => users.id)
    users: Users;

    @ApiModelProperty()
    @Column("varchar", { length: 50 })
    tipo: string;

    @ApiModelProperty()
    @Column("varchar", { length: 10 })
    codigo: string;

    @ApiModelProperty()
    @Column("varchar", { length: 6 })
    senha: string;

    @ApiModelProperty()
    @Column({ type: "int", width: 11})
    limite: number;

    @ApiModelProperty()
    @Column({ type: "int", width: 11})
    contador: number;

    @ApiModelProperty()
    @Column("varchar", { length: 1 })
    sts: string;
}
