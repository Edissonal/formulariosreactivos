import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  constructor(private fb:FormBuilder) { }


  miFormulario: FormGroup = this.fb.group({
    genero: ['F', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones:[false,Validators.requiredTrue]

  });

  persona = {
    genero: 'F',
    notificaciones: true,
    condiciones:false
  }
  ngOnInit(): void {

    this.miFormulario.reset({
      ...this.persona,
      condiciones:false
    });


    this.miFormulario.valueChanges.subscribe(({condiciones, ... rest}) => {
     // delete form.condiciones;
      this.persona = rest;
    })


    
  }


  guardar() {
    const formvalue = { ...this.miFormulario.value };
     delete formvalue.condiciones;

    this.persona = formvalue;
}

}
