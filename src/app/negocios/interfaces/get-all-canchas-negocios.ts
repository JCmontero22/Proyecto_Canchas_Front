export interface GetAllCanchasNegocios {
  error:      boolean;
  statusCode: number;
  mensaje:    string;
  data:       Datum[];
}

export interface Datum {
  id_cancha:     number;
  nombre_cancha: string;
  id_negocio:    number;
  imagen_cancha: string;
  estado_cancha: number;
}
