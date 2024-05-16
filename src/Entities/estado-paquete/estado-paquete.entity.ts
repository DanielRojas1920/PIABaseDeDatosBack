import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('EstadoPaquete')
export class EstadoPaquete {
    @PrimaryGeneratedColumn()
    IDEstadoPaquete: number

    @Column({name: 'EstadoPaquete', length: 20, nullable: false})
    EstadoPaquete: string


}