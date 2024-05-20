import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Clientes } from 'src/Entities/clientes/clientes.entity';
import { EstadoPaquete } from 'src/Entities/estado-paquete/estado-paquete.entity';
import { Tipos } from 'src/Entities/tipos/tipos.entity';
import { EntityManager, In, Repository, getConnection } from 'typeorm';
import { DetallesPaquete } from 'src/Entities/DetallesPaquete/DetallesPaquete.entity';
import { Sucursales } from 'src/Entities/Sucursales/Sucursales.entity';
import { Paises } from 'src/Entities/paises/paises.entity';
import { Estados } from 'src/Entities/estados/estados.entity';
import { CP } from 'src/Entities/CP/CP.entity';
import { EstadoEntrega } from 'src/Entities/EstadoEntregas/EstadoEntrega.identity';
import { Destinatarios } from 'src/Entities/Destinatarios/Destintario.entity';
import { Paquetes } from 'src/Entities/Paquetes/Paquetes.entity';
import { Entregas } from 'src/Entities/Entregas/Entregas.entity';
import { Transportes } from 'src/Entities/Transportes/Transportes.entity';
import { Modelos } from 'src/Entities/Modelos/Modelos.entity';
import { response } from 'express';


export interface Repositories {
    'EstadoPaquete': Repository<EstadoPaquete>,
    'Clientes': Repository<Clientes>,
    'Tipos': Repository<Tipos>,
    'DetallesPaquete': Repository<DetallesPaquete>,
    'Sucursales': Repository<Sucursales>,
    'Paises': Repository<Paises>,
    'Estados': Repository<Estados>,
    'CP': Repository<CP>,
    'EstadoEntrega': Repository<EstadoEntrega>,
    'Paquetes': Repository<Paquetes>,
    'Entregas': Repository<Entregas>,
    'Destinatarios': Repository<Destinatarios>,
    'Transportes': Repository<Transportes>,
    'Modelos': Repository<Modelos>,
}

@Injectable()
export class GeneralService {

    repositories: Repositories;
    relations = {
        'Destinatarios': ['IDPais', 'IDEstado', 'IDCP'],
        'Entregas': ['IDPaquete', 'IDTransporte', 'IDEstadoEntrega'],
        'Paquetes': ['IDTipo', 
        'IDEstadoPaquete', 
        'IDDetallesPaquete', 
        'IDCliente', 
        'IDDestinatarios',
        'IDSucursales',],
        'Sucursales': ['IDPais', 'IDEstado', 'IDCP'],
        'Transportes': ['IDEmpleado', 'IDModelo', 'IDTransporteEstado'],
    }


    constructor(
    @InjectRepository(EstadoPaquete)
    private EstadoPaqueteRepository: Repository<EstadoPaquete>,
    @InjectRepository(Tipos)
    private TiposRepository: Repository<Tipos>,
    @InjectRepository(Clientes)
    private ClientesRepository: Repository<Clientes>,
    @InjectRepository(DetallesPaquete)
    private DetallesPaqueteRepository: Repository<DetallesPaquete>,
    @InjectRepository(Sucursales)
    private SucursalesRepository: Repository<Sucursales>,
    @InjectRepository(Paises)
    private PaisesRepository: Repository<Paises>,
    @InjectRepository(Estados)
    private EstadosRepository: Repository<Estados>,
    @InjectRepository(CP)
    private CPRepository: Repository<CP>,
    @InjectRepository(EstadoEntrega)
    private EstadoEntregaRepository: Repository<EstadoEntrega>,
    @InjectRepository(Paquetes)
    private PaquetesRepository: Repository<Paquetes>,
    @InjectRepository(Entregas)
    private EntregasRespository: Repository<Entregas>,
    @InjectRepository(Modelos)
    private ModelosRespository: Repository<Modelos>,
    @InjectRepository(Transportes)
    private TransportesRespository: Repository<Transportes>,
    @InjectRepository(Destinatarios)
    private DestinatariosRespository: Repository<Destinatarios>,
    private manager: EntityManager,
) {
    this.repositories = {
        'EstadoPaquete': this.EstadoPaqueteRepository,
        'Clientes': this.ClientesRepository,
        'Tipos': this.TiposRepository,
        'DetallesPaquete': this.DetallesPaqueteRepository,
        'Sucursales': this.SucursalesRepository,
        'Paises': this.PaisesRepository,
        'Estados': this.EstadosRepository,
        'CP': this.CPRepository,
        'EstadoEntrega': this.EstadoEntregaRepository,
        'Paquetes': this.PaquetesRepository,
        'Entregas': this.EntregasRespository,
        'Modelos':this.ModelosRespository,
        'Transportes': this.TransportesRespository,
        'Destinatarios': this.DestinatariosRespository,

    }
}

    async fetchAll(repository: string): Promise<any[]> {
        if (repository === 'Paquetes'){
            return this.repositories['Paquetes'].find({
                relations: [
                    'IDTipo',
                    'IDEstadoPaquete',
                    'IDDetallesPaquete',
                    'IDDestinatarios',
                    'IDDestinatarios.IDPais',
                    'IDDestinatarios.IDEstado',
                    'IDDestinatarios.IDCP',
                    'IDCliente'
                ],  

                });
        }
        return this.repositories[repository].find({
            relations: this.relations[repository]});
    }

    async PaquetesDisponibles(id: number): Promise<any>{
        if (id === 0){
            return this.repositories['Paquetes'].find({
                relations: [
                    'IDTipo',
                    'IDEstadoPaquete',
                    'IDDetallesPaquete',
                    'IDDestinatarios',
                    'IDDestinatarios.IDPais',
                    'IDDestinatarios.IDEstado',
                    'IDDestinatarios.IDCP',
                    'IDCliente'
                ],
                where: {
                    IDEstadoPaquete: 1
                }
                });
        }
        else if (id === 1) {
            return this.repositories['Paquetes'].find({
                relations: [
                    'IDTipo',
                    'IDEstadoPaquete',
                    'IDDetallesPaquete',
                    'IDDestinatarios',
                    'IDDestinatarios.IDPais',
                    'IDDestinatarios.IDEstado',
                    'IDDestinatarios.IDCP',
                    'IDCliente'
                ],
                where: {
                    IDEstadoPaquete: In([1,2])
                }
    
                });
        }
        else if (id===2) {
            return this.repositories['Paquetes'].find({
                relations: [
                    'IDTipo',
                    'IDEstadoPaquete',
                    'IDDetallesPaquete',
                    'IDDestinatarios',
                    'IDDestinatarios.IDPais',
                    'IDDestinatarios.IDEstado',
                    'IDDestinatarios.IDCP',
                    'IDCliente'
                ],
                where: {
                    IDEstadoPaquete: In([2])
                }
    
                });
        }else {
            return this.repositories['Transportes'].find({
                relations: this.relations['Transportes'],
                where: {
                    'IDTransporteEstado': 1
                }
    
                });
        }

    }

    async consultasSP(params: string[], id: number): Promise<any>{
        switch (id){
            case 0:
                return this.manager.query(
                    'EXEC PaquetesAgendados;'
                );
            case 1:
                return this.manager.query(
                    'EXEC PaquetesStatus @0',
                    [Number(params[0])]
                );
            case 2:
                return this.manager.query(
                    'EXEC PaquetesCliente @0',
                    [Number(params[0])]
                );
            case 3:
                return this.manager.query(
                    'EXEC PaquetesBusqueda @0, @1, @2, @3',
                    [
                        params[0] === null? null : Number(params[0]), 
                        params[1] === null? null : Number(params[1]), 
                        params[2] === null? null : Number(params[2]), 
                        params[3] === null? null : params[3],
                    ]   
                );
            default:
                console.log(id);
        }
    }
    
    async fetchById(id: any, repository: string): Promise<any> {
        const found = await this.repositories[repository].findOne({where: id});
        if (!found) {
            throw new NotFoundException(`El "${repository}" con id = "${id}" no se encontró`)
        }
        return found;
    }
    
    async add(row : any, repository: string): Promise<any>{
        let table: any;
        switch (repository) {
            case 'Paquetes':
                return this.manager.query('EXEC InsertPaquete @0, @1, @2, @3, @4, @5, @6, @7, @8, @9',
                [row.Desc,
                row.IDCliente,
                row.IDTipo,
                row.IDSucursales,
                row.IDDestinatarios,
                row.Ancho,
                row.Largo,
                row.Alto,
                row.Peso,
                row.EsFragil]);
            case 'Entregas':
                return this.manager.query('EXEC InsertEntrega @0, @1, @2, @3',
                [row.IDPaquetes,
                row.IDTransporte,
                row.FechaEntrega,
                row.FechaSalida,]);
            case 'Clientes':
                table = new Clientes();
                table.Nombre = row.Nombre;
                table.ApellidoP = row.ApellidoP;
                table.ApellidoM = row.ApellidoM;
                table.Correo = row.Correo;
                table.Telefono = row.Telefono;
                await this.repositories[repository].save(table);
                return table;
            case 'Destinatarios':
                table = new Destinatarios();
                table.Nombre = row.Nombre;
                table.ApellidoP = row.ApellidoP;
                table.ApellidoM = row.ApellidoM;
                table.Correo = row.Correo;
                table.Telefono = row.Telefono;
                table.ClaveRecepcion = row.ClaveRecepcion;
                table.Numero = row.Numero;
                table.Calle = row.Calle;
                table.IDPais = row.IDPais;
                table.IDEstado = row.IDEstado;
                table.IDCP = row.IDCP;
                await this.repositories[repository].save(table);
                return table;
            case 'EntregarPaquete':
                return this.manager.query('EXEC EntregarPaquete @0, @1',
                [row.IDPaquete,
                row.FechaEntrega,]);
        }

    }
    
    async remove (id: number, repository : string){
        return this.manager.query('EXEC CancelPaquete @0',
        [id]);
    }
    
    async update(repository:string,row: any, id:number){
        let rowId;

        if (repository === 'Clientes'){
            rowId ={
                'idCliente': id,
            }
        }

        else if (repository === 'Destinatarios'){
            rowId = {
                'IDDestinatarios': id,
            }
        }
        else if (repository === 'Paquetes'){
            rowId = {
                'IDPaquete': id,
            }

            console.log(row);

            const hasRow = await this.fetchById(rowId, repository)
            if (!hasRow) throw new Error (`El EstadoPaquete con id: "${id}" no fue encontrado`);

            if (Object.keys(row['DetallesPaquete']).length !== 0)
            this.repositories['DetallesPaquete'].update(id,row['DetallesPaquete']);

            delete row['DetallesPaquete'];

            console.log(row)
            
            if (Object.keys(row).length !== 0)
            return this.repositories[repository].update(id,row);

            return 'Vacio'
        }
        const hasRow = await this.fetchById(rowId, repository)
        if (!hasRow) throw new Error (`El EstadoPaquete con id: "${id}" no fue encontrado`);
        

        if (Object.keys(row).length !== 0)
        return this.repositories[repository].update(
            id,row);

        return 'Vacio';

    }


}
