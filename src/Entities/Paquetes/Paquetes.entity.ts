import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tipos } from "../tipos/tipos.entity";
import { EstadoPaquete } from "../estado-paquete/estado-paquete.entity";
import { DetallesPaquete } from "../DetallesPaquete/DetallesPaquete.entity";
import { Clientes } from "../clientes/clientes.entity";
import { Destinatarios } from "../Destinatarios/Destintario.entity";
import { Sucursales } from "../Sucursales/Sucursales.entity";


@Entity('Paquetes')
export class Paquetes{

    @PrimaryGeneratedColumn()
    IDPaquete:number;

    @Column({name: 'Clave', length:8, nullable:false})
    Clave: string;

    @Column({name: 'Desc', length:100, nullable:false})
    Desc: string;

    @ManyToOne(() => Tipos)
    @JoinColumn({name: 'IDTipo'})
    IDTipo: number;

    @ManyToOne(() => EstadoPaquete)
    @JoinColumn({name: 'IDEstadoPaquete'})
    IDEstadoPaquete: number;

    @ManyToOne(() => DetallesPaquete)
    @JoinColumn({name: 'IDDetallesPaquete'})
    IDDetallesPaquete: number;

    @ManyToOne(() => Clientes)
    @JoinColumn({name: 'IDCliente'})
    IDCliente: number;

    @ManyToOne(() => Destinatarios)
    @JoinColumn({name: 'IDDestinatarios'})
    IDDestinatarios: number;

    @ManyToOne(() => Sucursales)
    @JoinColumn({name: 'IDSucursales'})
    IDSucursales: number;
}