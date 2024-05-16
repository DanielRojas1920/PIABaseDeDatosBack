import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Tipos')
export class Tipos {
    @PrimaryGeneratedColumn()
    idTipos: number;

    @Column({name: 'Tipo', length: 40, nullable: false})
    Tipo: string;
}