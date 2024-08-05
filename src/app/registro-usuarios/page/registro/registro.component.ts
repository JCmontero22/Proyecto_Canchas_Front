import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresPersonalizados } from 'src/app/shared/validators/validadores_personalizados';
import Swal from 'sweetalert2';
import { SetRegistroUsuarios } from '../../interfaces/set-registro-usuarios';
import { RegistroUsuarioService } from '../../services/registro-usuario.service';
import { SweetAlerNotificacionesService } from 'src/app/core/services/sweet-aler-notificaciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

    public dataForm!: FormGroup
    //public dataRegistro!: SetRegistroUsuarios;

    constructor(private formulario: FormBuilder, private httpRegistroUsuario: RegistroUsuarioService, private sweetAlert: SweetAlerNotificacionesService, private router: Router){}

    ngOnInit(): void {
        this.dataForm = this.formularioInit();
    }

    formularioInit():FormGroup{
        return this.formulario.group({
            nombreUsuario: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$')]],
            telefonoUsuario: ['', [Validators.required, ValidadoresPersonalizados.validarSoloNumeros]],
            emailUsuario: ['', [Validators.required, Validators.email]],
            passUsuario: ['', [Validators.required, ValidadoresPersonalizados.validadorPass]],
            passDos: ['', [Validators.required,]]
        },{
              validators: ValidadoresPersonalizados.validarPassIguales(
                  'passUsuario',
                  'passDos'
              ),
        })
    }

    validacionYRegistro():void{
        if (this.dataForm.invalid) {

            this.sweetAlert.mostrarAlerta('error', 'Error en el formulario', 'Por favor diligencie todos los campos');

            return Object.values(this.dataForm.controls).forEach(controls => {
                controls.markAllAsTouched();
            })

        }else{
            let dataRegistro: SetRegistroUsuarios = {
                nombreUsuario: this.dataForm.get('nombreUsuario')?.value,
                telefonoUsuario: this.dataForm.get('telefonoUsuario')?.value,
                emailUsuario: this.dataForm.get('emailUsuario')?.value,
                passUsuario: this.dataForm.get('passUsuario')?.value
            }
            this.registroUsuario(dataRegistro);
        }
    }

    registroUsuario(dataRegistro: SetRegistroUsuarios):void{
        this.httpRegistroUsuario.setRegistroUsuario(dataRegistro).subscribe(registro => {
            this.sweetAlert.mostrarAlerta(registro.icono, registro.titulo, registro.mensaje);
            if (registro.statusCode == 201) {
                this.clear();
                this.router.navigate(['login/inicioLogin']);
            }
        });
    }

    clear():void{
        this.dataForm.reset();
    }
}
