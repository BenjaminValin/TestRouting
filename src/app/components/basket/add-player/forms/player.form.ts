import { AbstractControl, FormControl, Validators } from '@angular/forms';

export type FormGroupDef = {[key: string]: AbstractControl};

export const PLAYER_FORM_CREATE: FormGroupDef = {
    nom: new FormControl("", [ Validators.required, Validators.minLength(4) ]),
    prenom: new FormControl("", [ Validators.required, Validators.minLength(4) ]),
    age: new FormControl(0, [Validators.required, Validators.min(18), Validators.max(45)]),
    taille: new FormControl(0, [Validators.required, Validators.min(165), Validators.max(275)])
}