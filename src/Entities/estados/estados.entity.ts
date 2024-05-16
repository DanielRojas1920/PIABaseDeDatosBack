import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Estados')
export class Estados {
    @PrimaryGeneratedColumn()
    IDEstados: number;

    @Column({name: 'Estado', length: 40, nullable:false})
    Estado: string;
}