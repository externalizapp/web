import { Adjudicacion } from './adjudicacion.model';

export interface Contrato{
    id_poder_adjudicador: number,
    id_contrato: number,
    id_plataforma: number,
    titulo: string;
    poder_adjudicador: string,
    identificador_expediente: string,
    fuente: string,
    plataforma: string,
    adjudicaciones: Array<Adjudicacion>
}