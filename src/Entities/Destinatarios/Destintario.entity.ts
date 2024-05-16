import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Paises } from "../paises/paises.entity";
import { Estados } from "../estados/estados.entity";
import { CP } from "../CP/CP.entity";



@Entity('Destinatarios')
export class Destinatarios {

    @PrimaryGeneratedColumn()
    IDDestinatarios: number;

    @Column({name:'Nombre', length:40 ,nullable: false})
    Nombre: string;

    @Column({name:'ApellidoP', length:40 ,nullable: false})
    ApellidoP: string;

    @Column({name:'ApellidoM', length:40 ,nullable: false})
    ApellidoM: string;

    @Column({name:'Correo', length:40 ,nullable: false})
    Correo: string;

    @Column({name:'telefono', length:12 ,nullable: false})
    Telefono: string;

    @Column({name:'ClaveRecepcion', length:40 ,nullable: false})
    ClaveRecepcion: string;

    @Column({name:'Numero', nullable:false})
    Numero: number;

    @Column({name:'Calle', length:40 ,nullable: false})
    Calle: string;

    @ManyToOne(() => Paises)
    @JoinColumn({name:'IDPais'})
    IDPais: number;

    @ManyToOne(() => Estados)
    @JoinColumn({name:'IDEstado'})
    IDEstado: number;

    @ManyToOne(() => CP)
    @JoinColumn({name:'IDCP'})
    IDCP: number;
}