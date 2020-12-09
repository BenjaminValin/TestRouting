import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PLAYER_FORM_CREATE } from './forms/player.form';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form_player = new FormGroup(PLAYER_FORM_CREATE);

  onSubmit(){}

}
