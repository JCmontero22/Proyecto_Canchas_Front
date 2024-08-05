
export interface GetAllPublicaciones {
  error:      boolean;
  statusCode: number;
  mensaje:    string;
  data:       data[];
}

export interface data {
  id_publicacion:          number;
  titulo_publicacion:      string;
  descripcion_publicacion: string;
  imagen_publicacion:      string;
  estado_publicacion:      number;
}
