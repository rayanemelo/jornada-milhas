import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '../../core/services/form.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  perfilComponent = false;

  constructor(
    private formService: FormService
  ) { }

  registerForm!: FormGroup;

  register() {
    const form = this.formService.getForm();
    console.log(form);
  }


}
