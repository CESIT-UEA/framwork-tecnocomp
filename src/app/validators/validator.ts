import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function noOnlyWhitespace(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (control.value && typeof control.value === 'string') {
            const value = control.value;
            
            // Verifica se a string está vazia ou contém apenas espaços
            if (value.trim().length === 0) {
                return { noOnlyWhitespace: true };
            }
        }
        return null; // Entrada válida
    };
}
