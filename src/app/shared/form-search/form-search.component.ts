import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormSearchService } from '../../core/services/form-search.service';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrl: './form-search.component.scss'
})
export class FormSearchComponent {
  constructor(
    public dialog: MatDialog,
    public formSearchService: FormSearchService
  ) {}

  openDialog() {
    this.dialog.open(ModalComponent);
  }
}
