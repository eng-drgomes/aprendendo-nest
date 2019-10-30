import { Entity, Column } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

import { defaultCols } from "../default-cols";

@Entity()
export class Midias extends defaultCols {

    @ApiModelProperty()
    @Column('int')
    idItem: number;

    @ApiModelProperty()
    @Column("varchar", { length: 50 })
    ref: string;

    @ApiModelProperty()
    @Column('text')
    descricao: string;

    @ApiModelProperty()
    @Column('text')
    legenda: string;

    @ApiModelProperty()
    @Column("varchar", { length: 1 })
    sts: string;    

}
