import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity('Departamentos')
export class Departamentos {
    @PrimaryGeneratedColumn()
    IDDepartamentos: number;

    @Column({name: 'Departamentos', length: 40, nullable: true})
    Departamentos: string;
}