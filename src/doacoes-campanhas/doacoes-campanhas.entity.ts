import { Entity, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

import { defaultCols } from "../default-cols";
import { DoacoesTipos } from "../doacoes-tipos/doacoes-tipos.entity";
import { DoacoesCategorias } from "../doacoes-categorias/doacoes-categorias.entity";

@Entity()
export class DoacoesCampanhas extends defaultCols {
    
    @ApiModelProperty()
    @Column("varchar", { length: 255 })
    titulo: string;

    @ApiModelProperty()
    @Column('text')
    descricao: string;

    @ApiModelProperty()
    @Column('int', { nullable: true })
    @ManyToOne(type => DoacoesTipos, doacoesTipos => doacoesTipos.id)
    doacoesTipos: DoacoesTipos;
    
    @ApiModelProperty()
    @Column('int', { nullable: true })
    @ManyToOne(type => DoacoesCategorias, doacoesCategorias => doacoesCategorias.id)
    doacoesCategorias: DoacoesCategorias;

    @ApiModelProperty()
    @Column("varchar", { length: 255 })
    imgcapa: string;

    @ApiModelProperty()
    @CreateDateColumn()
    dtInicial: Date;

    @ApiModelProperty()
    @CreateDateColumn()
    dtFinal: Date
}
