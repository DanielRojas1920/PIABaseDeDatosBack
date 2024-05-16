import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity('TipoDeVehiculo')
export class TipoDeVehiculo {

    @PrimaryGeneratedColumn()
    IDTipoDeVehiculo: number;

    @Column({name: 'Vehiculo', length: 40, nullable: false})
    Vehiculo: string;
}