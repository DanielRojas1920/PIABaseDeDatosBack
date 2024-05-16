import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Empleados } from "../Empleados/Empleados.entity";
import { Modelos } from "../Modelos/Modelos.entity";
import { TransporteEstado } from "../TransporteEstadp/TransporteEstado.entity";



@Entity('Transportes')
export class Transportes {

    @PrimaryGeneratedColumn()
    IDTransportes: number;

    @Column({name: 'PorcentajeLlenado', type: 'decimal', scale: 2, precision: 6, nullable: false})
    PorcentajeLlenado: number;

    @ManyToOne(() => Empleados)
    @JoinColumn({name: 'IDEmpleado'})
    IDEmpleado: number;

    @ManyToOne(() => Modelos)
    @JoinColumn({name: 'IDModelo'})
    IDModelo: number;

    @ManyToOne(() => TransporteEstado)
    @JoinColumn({name: 'IDTransporteEstado'})
    IDTransporteEstado: number;
}