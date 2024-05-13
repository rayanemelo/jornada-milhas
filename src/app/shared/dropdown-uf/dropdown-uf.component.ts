import { Component, Input, OnInit } from '@angular/core';
import { UfService } from '../../core/services/uf.service';
import { UF } from '../../core/types/type';
import { Observable, map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrl: './dropdown-uf.component.scss',
})
export class DropdownUfComponent implements OnInit {
  @Input() label: string = 'UF';
  @Input() iconPrefix: string = '';
  @Input() control!: FormControl;
  @Input() placeholder: string = ''

  ufs: UF[] = [];

  filteredOptions$?: Observable<UF[]>;

  constructor(private ufService: UfService) {}

  ngOnInit(): void {
    this.ufService.getUfs().subscribe((ufs) => {
      this.ufs = ufs;
    });

    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this.filtrarUfs(value))
    );
  }

  filtrarUfs(value: string): UF[] {
    const valorFiltrado = value?.toLowerCase();
    const result = this.ufs.filter(
      estado => estado.nome.toLowerCase().includes(valorFiltrado)
    )
    return result
  }
}
