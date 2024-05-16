import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Paises } from "../paises/paises.entity";
import { Estados } from "../estados/estados.entity";
import { CP } from "../CP/CP.entity";



@Entity('Sucursales')
export class Sucursales {
    @PrimaryGeneratedColumn()
    IDSucursal: number;

    @Column({name:'Numero', nullable: false})
    Numero: number;

    @Column({name: 'Calle', nullable: false, length: 40})
    Calle: string;

    @Column({name: 'Telefono', nullable: false, length: 12})
    Telefono: string;

    @ManyToOne(() => Paises)
    @JoinColumn({name:'IDPais'})
    IDPais: number;

    @ManyToOne(() => Estados)
    @JoinColumn({name: 'IDEstado'})
    IDEstado: number;

    @ManyToOne(() => CP)
    @JoinColumn({name: 'IDCP'})
    IDCP: number;
}