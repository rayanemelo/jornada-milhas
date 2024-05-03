import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-passenger-selection',
  templateUrl: './passenger-selection.component.html',
  styleUrls: ['./passenger-selection.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PassengerSelectionComponent),
      multi: true
    }
  ]
})
export class PassengerSelectionComponent implements ControlValueAccessor {
  @Input() title: string = '';
  @Input() description: string = '';

  value: number = 0;

  onChange = (value: number) => {};
  onTouch = () => {};

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}

  increment() {
    return () => {
      this.value++;
      this.onChange(this.value);
      this.onTouch();
    }
  }

  decrement() {
    return () => {
      if (this.value > 0) {
        this.value--;
        this.onChange(this.value);
        this.onTouch();
      }
    }
  }
}
