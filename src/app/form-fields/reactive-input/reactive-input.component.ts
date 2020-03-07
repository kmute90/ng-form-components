import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'reactive-input',
    templateUrl: './reactive-input.component.html',
})
export class ReactiveInputComponent {
    @Input() title: string;
    @Input() readonly: boolean = false;

    @Input() control: FormControl;
}
