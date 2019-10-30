import { ApiModelProperty } from "@nestjs/swagger";
import { Column, Entity } from "typeorm";

import { defaultCols } from "../default-cols";

@Entity()
export class DoacoesTipos extends defaultCols {

    @ApiModelProperty()
    @Column("varchar", { length: 255 })
    descricao: string;
    
}
