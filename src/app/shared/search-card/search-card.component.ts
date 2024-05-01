import { Component, Input } from '@angular/core';
import { Promocao } from '../../core/types/type';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrl: './search-card.component.scss'
})
export class SearchCardComponent {
  @Input() promocao!: Promocao;
}
