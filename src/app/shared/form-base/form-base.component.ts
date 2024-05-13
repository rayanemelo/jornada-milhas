import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UF } from '../../core/types/type';
import { FormService } from '../../core/services/form.service';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrl: './form-base.component.scss'
})
export class FormBaseComponent {
  cadastroForm!: FormGroup;
  estadoControl = new FormControl<UF | null>(null, Validators.required);

  @Input() perfilComponent!: boolean;
  @Output() actionClick: EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService
  ) { }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      nome: [null, Validators.required],
      nascimento: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      cidade: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(3)]],
      genero: ['outro'],
      telefone: [null, Validators.required],
      estado: this.estadoControl,
      confirmEmail: [null, [Validators.required, Validators.email]],
      confirmPassword: [null, [Validators.required, Validators.minLength(3)]],
      acceptTerms: [false, [Validators.requiredTrue]]
    });
    this.formService.setForm(this.cadastroForm);
  }

  submit() {
    this.actionClick.emit();
  }

}
