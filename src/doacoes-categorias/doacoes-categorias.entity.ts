import { Entity, Column } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

import { defaultCols } from "../default-cols";

@Entity()
export class DoacoesCategorias extends defaultCols {

    @ApiModelProperty()
    @Column("varchar", { length: 250 })
    nome: string;

}
