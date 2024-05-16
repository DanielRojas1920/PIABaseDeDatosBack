import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Paquetes } from "../Paquetes/Paquetes.entity";
import { Transportes } from "../Transportes/Transportes.entity";
import { EstadoEntrega } from "../EstadoEntregas/EstadoEntrega.identity";



@Entity('Entregas')
export class Entregas {
    
    @PrimaryGeneratedColumn()
    IDEntregas: number;

    @Column({type:'datetime', name:'FechaEntrega', nullable:false})
    FechaEntrega: string;

    @Column({type:'datetime', name:'FechaSalida', nullable:false})
    FechaSalida: string;

    @Column({type:'datetime', name:'FechaRecibido', nullable:false})
    FechaRecibido: string;

    @ManyToOne(() => Paquetes)
    @JoinColumn({name:'IDPaquetes'})
    IDPaquetes: number;

    @ManyToOne(() => Transportes)
    @JoinColumn({name:'IDTransporte'})
    IDTransporte: number;

    @ManyToOne(() => EstadoEntrega)
    @JoinColumn({name:'IDEstadoEntrega'})
    IDEstadoEntrega: number;


}