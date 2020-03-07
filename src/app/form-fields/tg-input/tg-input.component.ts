import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'tg-input',
  templateUrl: './tg-input.component.html',
  styleUrls: ['./tg-input.component.scss']
})
export class TgInputComponent implements OnInit {
  constructor() { }

  @Input() form: FormGroup;
  @Input() input: string;

  @Input() title: string;
  @Input() readonly: boolean = false;

  ngOnInit(): void { }
}
