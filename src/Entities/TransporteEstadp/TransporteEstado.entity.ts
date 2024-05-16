import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('TransporteEstado')
export class TransporteEstado {
    @PrimaryGeneratedColumn()
    IDTransporteEstado: number;

    @Column({name: 'TransporteEstado', nullable: false, length: 40})
    TransporteEstado: string;
}