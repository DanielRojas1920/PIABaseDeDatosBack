import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoDeVehiculo } from "../TipoDeVehiculo/TipoDeVehiculo.entity";


@Entity('Modelos')
export class Modelos {

    @PrimaryGeneratedColumn()
    IDModelo: number;

    @Column({name: 'Modelo', length: 40, nullable: false})
    Modelo: string;

    @Column({type: 'decimal', name: 'CapacidadTanque', precision: 8, scale:2, nullable: false})
    CapacidadTanque: number;

    @Column({type: 'decimal', name: 'CargaMax', precision: 8, scale:2, nullable: false})
    CargaMax: number;

    @Column({type: 'decimal', name: 'AnchoMax', precision: 6, scale:2, nullable: false})
    AnchoMax: number;

    @Column({type: 'decimal', name: 'LargoMax', precision: 6, scale:2, nullable: false})
    LargoMax: number;

    @Column({type: 'decimal', name: 'AltoMax', precision: 6, scale:2, nullable: false})
    AltoMax: number;

    @ManyToOne(() => TipoDeVehiculo)
    @JoinColumn({name: 'IDTipoDeVehiculo'})
    IDTipoDeVehiculo: number;
}