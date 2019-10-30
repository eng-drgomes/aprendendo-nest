import { Entity, Column } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

import { defaultCols } from "../default-cols";

@Entity()
export class Hemocentros extends defaultCols {

    @ApiModelProperty()
    @Column("varchar", { length: 50 })
    nome: string;

    @ApiModelProperty()
    @Column("varchar", { length: 50 })
    responsavel: string;

    @ApiModelProperty()
    @Column({type: 'int',  width: 11 })
    telefone: number;

    @ApiModelProperty()
    @Column("varchar", { length: 50 })
    logradouro: string;

    @ApiModelProperty()
    @Column("varchar", { length: 45 })
    numero: string

    @ApiModelProperty()
    @Column("varchar", { length: 45 })
    bairro: string
    
    @ApiModelProperty()
    @Column("varchar", { length: 45 })
    cidade: string
    
    @ApiModelProperty()
    @Column("varchar", { length: 45 })
    uf: string
    
    @ApiModelProperty()
    @Column("varchar", { length: 15 })
    cep: string
    
    @ApiModelProperty()
    @Column("varchar", { length: 1 })
    sts: string;
}
