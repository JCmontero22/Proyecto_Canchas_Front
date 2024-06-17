import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";


export class ValidadoresPersonalizados extends Validators {

    static validadorPass(control: AbstractControl):ValidationErrors | null{
        const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        return regex.test(control.value) ? null : {validadorPass: true};
    }
}
