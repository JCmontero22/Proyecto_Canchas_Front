export interface GetAllNegocios {
  error:      boolean;
  statusCode: number;
  mensaje:    string;
  data:       Datum[];
}

export interface Datum {
  id_negocio:      number;
  nombre_negocio:  string;
  logo_negocio:    string;
  estado_negocio:  number;
  telfono_negocio: string;
}
