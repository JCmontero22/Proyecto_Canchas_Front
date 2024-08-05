import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresPersonalizados } from 'src/app/shared/validators/validadores_personalizados';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    public dataForm!: FormGroup;

    constructor(private formulario: FormBuilder){}

    ngOnInit(): void {
        this.dataForm = this.formularioInit();
    }

    formularioInit():FormGroup{
        return this.formulario.group({
            emailUsuario: ['', [Validators.required, Validators.email]],
            passUsuario: ['', [Validators.required, ValidadoresPersonalizados.validadorPass]]
        });
    }
}


/*  */
/*  */
/* ^(?=.*[A-Z])(?=.*\d).{8,}$
 */
