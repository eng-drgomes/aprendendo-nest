import { Entity, Column } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";
import { defaultCols } from "../default-cols";

@Entity()
export class Users extends defaultCols {

    @ApiModelProperty()
    @Column("varchar", { length: 50 })
    nome: string;

    @ApiModelProperty()
    @Column("varchar", { length: 50 })
    user: string;

    @ApiModelProperty()
    @Column("varchar", { length: 3 })
    tipoSanguineo: string;

    @ApiModelProperty()
    @Column('text')
    token: string;

    @ApiModelProperty()
    @Column("varchar", { length: 1 })
    sts: string;

    @ApiModelProperty()
    @Column("varchar", { length: 300 })
    fotoSocial: string;

    @ApiModelProperty()
    @Column("varchar", { length: 300 })
    fotoAlternativa: string;

    @ApiModelProperty()
    @Column("varchar", { length: 50 })
    profile: string;

}
