import {
  Component,
  Input,
  forwardRef} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'tg-input',
  templateUrl: './tg-input.component.html',
  styleUrls: ['./tg-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TgInputComponent),
      multi: true
    }
  ]
})
export class TgInputComponent implements ControlValueAccessor {
  @Input() title: string;

  @Input() set value(value: string) {
    this.innerValue = value == null ? '' : String(value);
  }
  get value() {
    return this.innerValue;
  }

  @Input() set disabled(value: any) {
    //this.setDisabledState(getFlagAttribute(value));
  }
  get disabled() {
    return this.isDisabled;
  }

  private changeCallback: Function;
  private touchedCallback: Function;

  isDisabled = false;
  innerValue = '';

  writeValue(value: any) {
    this.value = value;
  }
  registerOnChange(fn: Function) {
    this.changeCallback = fn;
  }
  registerOnTouched(fn: Function) {
    this.touchedCallback = fn;
  }
  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  inputHandler(event: Event) {
    this.value = (<HTMLInputElement>event.target).value;
    if (this.changeCallback) {
      this.changeCallback(this.value);
    }
  }

  setTouched() {
    if (this.touchedCallback) {
      this.touchedCallback();
    }
  }
}
