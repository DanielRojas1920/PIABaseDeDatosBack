import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('EstadoEntrega')
export class EstadoEntrega {
    @PrimaryGeneratedColumn()
    IDEstadoEntrega: number;

    @Column({name: 'EstadoEntrega', length: 20, nullable: false})
    EstadoEntrega: string;
}