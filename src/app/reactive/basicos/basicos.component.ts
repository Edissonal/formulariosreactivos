import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {


 /* miFormulario: FormGroup = new FormGroup({
    
    nombre: new FormControl('RXT 480'),
    precio: new FormControl(1500),
    existencias: new FormControl(5),
  })*/

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'rxtx 4080ti',
      precio: 156,
      });
  }


  miFormulario: FormGroup = this.fb.group({
    nombre: [,[Validators.required,Validators.minLength(3)]],
    precio: [,[Validators.minLength(0),Validators.required]],
    existencias:[,[Validators.minLength(0),Validators.required]],
  });

  campoEsvalido(campo:string) {
   return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  guardar() {

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
     }
    
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
