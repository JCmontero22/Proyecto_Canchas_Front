

export interface GetRegistroUsuarios {
  error:      boolean;
  statusCode: number;
  data:       Data;
  titulo:     string;
  mensaje:    string;
  icono:      string;

}

export interface Data {
  nombre_usuario:   string;
  email_usuario:    string;
  pass_usuario:     string;
  telefono_usuario: number;
  id_usuario:       number;
}


/* export interface Existe {
  message: string;
  errors:  Errors;
}

export interface Errors {
  emailUsuario: string[];
} */
