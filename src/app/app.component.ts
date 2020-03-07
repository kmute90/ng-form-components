import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = new FormGroup({
      fullName: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  save() {
    if (this.form.valid) {
      alert('submitted');
    }
  }
}
