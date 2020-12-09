import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Personne } from './models/personne.model';
import { PERS_FORM_CREATE } from './forms/personne.form';
import { TRI_FORM_CREATE } from './forms/tri.form';

@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor() {
  }

  form_pers = new FormGroup(PERS_FORM_CREATE);
  form_tri = new FormGroup(TRI_FORM_CREATE);

  title: string = 'Filtre à prénoms';

  liste: Array<Personne> = [];
  listeOK: Array<Personne> = [];
  listePasOK: Array<Personne> = [];
  critere: string ="";

  date: Date = new Date();

  tri() {

    this.listeOK = [];
    this.listePasOK = [];

    this.critere = this.form_tri.value.tri;

    for (const pers of this.liste) {
      if (pers.nom.toUpperCase().startsWith(this.critere.toUpperCase())) {
        this.listeOK.push(pers);
      } else {
        this.listePasOK.push(pers);
      }
    }    
  }

  onSubmit(){
    
    if(this.form_pers.valid) {
      this.liste.push(new Personne(this.form_pers.value.nom,this.form_pers.value.age,this.form_pers.value.ville));
    } else {
      alert("Un ou plusieurs champs sont invalides. Recommencez");
    }
  }

}
