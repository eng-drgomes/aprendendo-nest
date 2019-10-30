import { Entity, Column } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

import { defaultCols } from "../default-cols";

@Entity()
export class Grupos extends defaultCols {
    
    @ApiModelProperty()
    @Column("varchar", { length: 100 })
    nome: string;

    @ApiModelProperty()
    @Column("varchar", { length: 1 })
    sts: string;
    
    @ApiModelProperty()
    @Column("varchar", { length: 50 })
    ddd: string;

}
