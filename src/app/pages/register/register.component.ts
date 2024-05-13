import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '../../core/services/form.service';
import { RegisterService } from '../../core/services/register.service';
import { Usuario } from '../../core/types/type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  perfilComponent = false;

  constructor(
    private formService: FormService,
    private registerService: RegisterService,
    private router: Router
  ) { }

  registerForm!: FormGroup;

  register() {
    const form = this.formService.getForm();

    if (form?.valid) {
      const newUser = form.getRawValue() as Usuario;
      console.log("newUser: ", newUser);
      this.registerService.cadastrar(newUser).subscribe({
        next: (value) => {
          console.log('Cadastro realizado com sucesso', value);
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.log('Erro ao realizar cadastro', error);
        }
      })

    }
  }


}
