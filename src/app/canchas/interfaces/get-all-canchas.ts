export interface GetAllCanchas {
  error:      boolean;
  statusCode: number;
  mensaje:    string;
  data:       Datum[];
}

export interface Datum {
  id_cancha:      number;
  nombre_cancha:  string;
  logo_cancha:    string;
  estado_canchas: number;
}
