import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Departamentos } from "../Departamentos/Departamentos.entity";
import { Sucursales } from "../Sucursales/Sucursales.entity";


@Entity('Empleados')
export class Empleados {
    @PrimaryGeneratedColumn()
    IDEmpleado: number;

    @Column({name: 'NumeroDeNomina', length: 20, nullable:false})
    NumeroDeNomina: string;

    @Column({name: 'Nombre', length: 40, nullable:false})
    Nombre: string;

    @Column({name: 'ApellidoP', length: 40, nullable:false})
    ApellidoP: string;

    @Column({name: 'ApellidoM', length: 40, nullable:false})
    ApellidoM: string;

    @Column({name: 'Edad', nullable:false})
    Edad: number;

    @Column({name: 'Sexo',length: 1,  nullable:false})
    Sexo: string;

    @Column({name: 'Correo',length: 40,  nullable:false})
    Correo: string;

    @Column({name: 'Telefono',length: 40,  nullable:false})
    Telefono: string;

    @ManyToOne(() => Departamentos)
    @JoinColumn({name: 'IDDepartamentos'})
    IDDepartamentos: number;

    @ManyToOne(() => Sucursales)
    @JoinColumn({name: 'IDSucursal'})
    IDSucursal: number;



}