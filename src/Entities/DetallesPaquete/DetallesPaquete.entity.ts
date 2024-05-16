import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('DetallesPaquete')
export class DetallesPaquete {
    @PrimaryGeneratedColumn()
    IDDetallesPaquete: number

    @Column({type:"decimal",precision: 6, scale:2, name: 'Ancho', nullable: false})
    Ancho:number;

    @Column({type:"decimal",precision: 6, scale:2,  name: 'Largo', nullable: false})
    Largo: number;

    @Column({type:"decimal",precision: 6, scale:2, name: 'Alto', nullable: false})
    Alto: number;

    @Column({type:"decimal",precision: 6, scale:2, name: 'Peso', nullable: false})
    Peso: number;

    @Column({type:'bit', name: 'EsFragil', nullable: false})
    EsFragil: boolean;
    
}