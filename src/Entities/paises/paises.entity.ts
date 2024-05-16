import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Paises')
export class Paises{
    @PrimaryGeneratedColumn()
    IDPais:number

    @Column({name: 'Ancho', length: 40,nullable: false})
    Pais: string

}