import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../shared/modal/modal.component';
import { MatChipSelectionChange } from '@angular/material/chips';

@Injectable({
  providedIn: 'root'
})
export class FormSearchService {
  formSearch: FormGroup;

  constructor(
    private dialog: MatDialog,
  ) {
    this.formSearch = new FormGroup({
      somenteIda: new FormControl(false),
      origem: new FormControl(null),
      destino: new FormControl(null),
      tipo: new FormControl("Econômica"),
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0),
    })
  }

  getDescricaoPassageiros(): string {
    let descricao = ''

    const adultos = this.formSearch.get('adultos')?.value;
    const criancas = this.formSearch.get('criancas')?.value;
    const bebes = this.formSearch.get('bebes')?.value;

    if (adultos > 0) {
      descricao += `${adultos} Adulto${adultos > 1 ? 's' : ''}`;
    }

    if (criancas > 0) {
      descricao += `${descricao ? ', ' : ''}${criancas} Criança${criancas > 1 ? 's' : ''}`;
    }

    if (bebes > 0) {
      descricao += `${descricao ? ', ' : ''}${bebes} Bebê${bebes > 1 ? 's' : ''}`;
    }

    return descricao;
  }

  obterControle(nome: string): FormControl {
    const control = this.formSearch.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl;
  }

  alterarTipo(event: MatChipSelectionChange, tipo: string) {
    if (event.selected) {
      this.formSearch.patchValue({
        tipo
      })
      console.log("tipo: ", tipo);
    }
  }

  openDialog() {
    this.dialog.open(ModalComponent);
  }
}
