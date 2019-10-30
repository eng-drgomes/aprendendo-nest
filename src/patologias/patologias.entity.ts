import { Entity, Column } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

import { defaultCols } from "../default-cols";

@Entity()
export class Patologias extends defaultCols {

    @ApiModelProperty()
    @Column("varchar", { length: 100 })
    nome: string;

    @ApiModelProperty()
    @Column('text')
    descricao: string;   

    @ApiModelProperty()
    @Column("varchar", { length: 1 })
    sts: string;
    
}
