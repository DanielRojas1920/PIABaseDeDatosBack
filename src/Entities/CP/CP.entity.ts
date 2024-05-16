import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('CP')
export class CP {
    @PrimaryGeneratedColumn()
    IDCP: number;

    @Column({name: 'CP', length: 5, nullable: false})
    cp: string;

    @Column({name: 'Municipio', length: 40, nullable: false})
    Municipio: string;

    @Column({name: 'Colonia', length: 40, nullable: false})
    Colonia: string
}