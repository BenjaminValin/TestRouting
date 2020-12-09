import { AbstractControl, FormControl, Validators } from '@angular/forms';

export type FormGroupDef = {[key: string]: AbstractControl};

export const PERS_FORM_CREATE: FormGroupDef = {
    nom: new FormControl("", [ Validators.required, Validators.minLength(3) ]),
    age: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(119)]),
    ville: new FormControl("", [Validators.required])
}