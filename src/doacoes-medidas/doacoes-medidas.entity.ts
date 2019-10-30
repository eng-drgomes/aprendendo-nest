import { Entity, Column } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

import { defaultCols } from "../default-cols";

@Entity()
export class DoacoesMedidas extends defaultCols {

    @ApiModelProperty()
    @Column("varchar", { length: 50 })
    descricao: string;

}
