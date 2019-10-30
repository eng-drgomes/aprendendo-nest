import { Entity, Column, ManyToOne, CreateDateColumn, JoinColumn } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

import { defaultCols } from "../default-cols";
import { Users } from "../users/users.entity";
import { Locais } from "../locais/locais.entity";
import { Hemocentros } from "../hemocentros/hemocentros.entity";
import { DoacoesTipos } from "../doacoes-tipos/doacoes-tipos.entity";
import { DoacoesCategorias } from "../doacoes-categorias/doacoes-categorias.entity";
import { DoacoesCampanhas } from "../doacoes-campanhas/doacoes-campanhas.entity";

@Entity()
export class Doacoes extends defaultCols {

    @ApiModelProperty()
    @Column('int', { nullable: true })
    @ManyToOne(type => Users, users => users.id)
    users: Users;
    
    @ApiModelProperty()
    @Column('int', { nullable: true })
    @ManyToOne(type => DoacoesTipos, doacoesTipos => doacoesTipos.id)
    doacoesTipos: DoacoesTipos;
    
    @ApiModelProperty()
    @Column('int', { nullable: true })
    @ManyToOne(type => DoacoesCategorias, doacoesCategorias => doacoesCategorias.id)
    doacoesCategorias: DoacoesCategorias;
    
    @ApiModelProperty()
    @Column("varchar", { length: 100 })
    titulo: string;

    @ApiModelProperty()
    @Column('text')
    conteudo: string;

    @ApiModelProperty()
    @Column("varchar", { length: 30 })
    fone: string;

    @ApiModelProperty()
    @Column('int')
    qtdCurtidas: number;

    @ApiModelProperty()
    @Column('int')
    qtdComentarios: number;

    @ApiModelProperty()
    @Column('int')
    qtdCompartilhamentos: number;

    @ApiModelProperty()
    @Column("varchar", { length: 50 })
    lagLog: string;
    
    @ApiModelProperty()
    @Column("varchar", { length: 45 })
    imgcapa: string;
    
    @ApiModelProperty()
    @Column("varchar", { length: 45 })
    tipoSanguinio: string;

    @ApiModelProperty()
    @JoinColumn({name: "id_hemocentro"})
    @ManyToOne(type => Hemocentros, hemocentros => hemocentros.id, { cascade: true })
    hemocentros: Hemocentros;

    @ApiModelProperty()
    @JoinColumn({name: "id_Local"})
    @ManyToOne(type => Locais, locais => locais.id, { cascade: true })
    locais: Locais;

    @ApiModelProperty()
    @JoinColumn({name: "id_campanha"})
    @ManyToOne(type => DoacoesCampanhas, doacoesCampanhas => doacoesCampanhas.id, { cascade: true })
    doacoesCampanhas: DoacoesCampanhas;
 
    @ApiModelProperty()
    @Column("varchar", { length: 300 })
    fotoSocial: string;

    @ApiModelProperty()
    @CreateDateColumn()
    dtPrevista: Date;

    @ApiModelProperty()
    @Column("varchar", { length: 45 })
    permitirDivulagar: string;
    
    @ApiModelProperty()
    @Column("varchar", { length: 1 })
    sts: string;

    @ApiModelProperty()
    @Column("varchar", { length: 300 })
    sts_solicitacao: string;

    @ApiModelProperty()
    @Column("decimal", { precision: 10, scale: 2, default: 0, })
    valor: number;

    @ApiModelProperty()
    @Column("varchar", { length: 45 })
    quantidade: string;
    
    @ApiModelProperty()
    @Column("varchar", { length: 45 })
    medicamento: string;

    @ApiModelProperty()
    @Column({ type: "int", width: 2 })
    medida: number;
}
