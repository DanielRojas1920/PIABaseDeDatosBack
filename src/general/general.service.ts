import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Clientes } from 'src/Entities/clientes/clientes.entity';
import { EstadoPaquete } from 'src/Entities/estado-paquete/estado-paquete.entity';
import { Tipos } from 'src/Entities/tipos/tipos.entity';
import { EntityManager, Repository, getConnection } from 'typeorm';
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
        'IDSucursales'],
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
        return this.repositories[repository].find({
            relations: this.relations[repository]});
        }
    
    async fetchById(id: number, repository: string): Promise<any> {
        const found = await this.repositories[repository].findOne(id);
        if (!found) {
            throw new NotFoundException(`El "${repository}" con id = "${id}" no se encontró`)
        }
        return found;
    }
    
    async add(row : any, repository: string): Promise<any>{
        let table: any;
        if (repository === 'Paquetes'){
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
        }
        switch (repository) {
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
            case 'Entregas':
                table = new Entregas();
                table.FechaEntrega = row.FechaEntrega;
                table.FechaSalida = row.FechaSalida;
                table.FechaRecibido = row.FechaRecibido;
                table.IDPaquetes = row.IDPaquetes;
                table.IDTransporte = row.IDTransporte;
                table.IDEstadoEntrega = row.IDEstadoEntrega;
                await this.repositories[repository].save(table);
                return table;
        }

    }
    
    async remove (id:number, repository : string){
        const result = await this.repositories[repository].delete(id);
        if (result.affected === 0){
            throw new NotFoundException(`No se encontró en "${repository}" id: "${id}"`)
        }
        return {message: 'Se borró el EstadoPaquete'}
    }
    
    async update(id: number, repository:string,row: any){
        const hasRow = await this.fetchById(id, repository)
        if (!hasRow) throw new Error (`El EstadoPaquete con id: "${id}" no fue encontrado`);

        switch (row) {
            case 'Clientes':
                await this.repositories[repository].update(
                    id,{
                        Nombre:row.Nombre,
                        ApellidoP: row.ApellidoP,
                        ApellidoM: row.ApellidoM,
                        Correo: row.Correo,
                        Telefono: row.Telefono,
                    });
            case 'Destinatarios':
                await this.repositories[repository].update(
                    id,{
                        Nombre:row.Nombre,
                        ApellidoP: row.ApellidoP,
                        ApellidoM: row.ApellidoM,
                        Correo: row.Correo,
                        Telefono: row.Telefono,
                        ClaveRecepcion: row.ClaveRecepcion,
                        Numero: row.Numero,
                        Calle: row.Calle,
                        IDPais: row.IDPais,
                        IDEstado: row.IDEstado,
                        IDCP: row.IDCP,
                    });
            case 'Paquetes':
                await this.repositories[repository].update(
                    id,{
                        Clave:row.Clave,
                        Desc: row.Desc,
                        IDTipo: row.IDTipo,
                        IDEstadoPaquete: row.IDEstadoPaquete,
                        IDDetallesPaquete: row.IDDetallesPaquete,
                        IDCliente: row.IDCliente,
                        IDDestinatarios: row.IDDestinatarios,
                        IDSucursales: row.IDSucursales,
                    });
            case 'DetallesPaquetes':
                await this.repositories[repository].update(
                    id,{
                        Ancho:row.Ancho,
                        Largo: row.Largo,
                        Alto: row.Alto,
                        Peso: row.Peso,
                        EsFragil: row.EsFragil,
                    });
            case 'Entregas':
                await this.repositories[repository].update(
                    id,{
                        FechaEntrega:row.FechaEntrega,
                        FechaSalida: row.FechaSalida,
                        FechaRecibido: row.FechaRecibido,
                        IDPaquetes: row.IDPaquetes,
                        IDTransporte: row.IDTransporte,
                        IDEstadoEntrega: row.IDEstadoEntrega,
                    });
        }


    }


}
