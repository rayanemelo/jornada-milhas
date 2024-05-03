import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss',
})
export class CountdownComponent  {
  @Input() value: number = 0;
  @Input() increment!: () => void;
  @Input() decrement!: () => void;
}
