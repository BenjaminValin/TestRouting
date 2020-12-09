import { AbstractControl, FormControl, Validators } from '@angular/forms';

export type FormGroupDef = {[key: string]: AbstractControl};

export const TRI_FORM_CREATE: FormGroupDef = {
    tri: new FormControl("", [ Validators.required, Validators.minLength(1) ]),
}