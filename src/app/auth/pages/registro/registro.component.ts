import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { nombreApellidoPattern, emailPattern, noPuedeSerStrider } from '../../../shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private validatorService: ValidatorService,
              private emailValidator:EmailValidatorService) { }
  

  
  get emailErrorMsg(): string {
    const errors = this.miformulario.get('email')?.errors;

    if (errors?.required) {
      return 'email es obligatorio';
    } else if (errors?.pattern) {
      return 'email no tiene formato de correo';
      
    } else if(errors?.emailTomado){
      return 'ya fue tomado';
    }

    return
  }

  miformulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)],[this.emailValidator]],
    username: ['', [Validators.required,noPuedeSerStrider]],
    password: ['', [Validators.required,Validators.minLength(6)]],
    password2: ['', [Validators.required,]]
  }, {
    validators:[this.validatorService.camposiguales('password','password2')]
  })

  


  
  
  ngOnInit(): void {

    this.miformulario.reset({
      nombre: 'fernando Herrera',
      email: 'test1@test.com',
      username: 'andres',
      password: '123456',
      password2:'123456',
      
    })
  }

  camponovalido(campo: string) {
    return this.miformulario.get(campo)?.invalid && this.miformulario.get(campo)?.touched
  
}

  submitFormulario() {
    console.log(this.miformulario.value);

    this.miformulario.markAllAsTouched();
  }
}
