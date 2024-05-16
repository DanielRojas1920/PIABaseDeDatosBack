import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Clientes')
export class Clientes {
    @PrimaryGeneratedColumn()
    idCliente: number;

    @Column({name: 'Nombre', length: 40, nullable: false})
    Nombre: string;

    @Column({name: 'ApellidoP', length: 40, nullable: false})
    ApellidoP: string;

    @Column({name: 'ApellidoM', length: 40, nullable: false})
    ApellidoM: string;

    @Column({name: 'Correo', length: 40, nullable: false})
    Correo: string;

    @Column({name: 'Telefono', length: 12, nullable: false})
    Telefono: string;
}