import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

export abstract class defaultCols {

    @PrimaryGeneratedColumn()
    id: number;
    
    @CreateDateColumn()
    created: Date;
    
    @UpdateDateColumn()
    updated: Date;
  
    @ApiModelProperty()
    @Column({default:false})
    deleted: boolean

    @VersionColumn()
    version: number;
  

}