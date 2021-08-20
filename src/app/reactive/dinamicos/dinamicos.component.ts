import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  nuevoFavorito:FormControl = this.fb.control('',Validators.required)

  get favoritosArr() {

    return this.miFormulario.get('favoritos') as FormArray;
   }
  
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Metal Gear',Validators.required],
      ['Death standing',Validators.required],
      
    ], Validators.required)
  })

  campovalido(campo:string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  agregarfavorito() {
    if (this.nuevoFavorito.invalid) {
      return;
    }
    
   // this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));
   this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value,Validators.required));
    this.nuevoFavorito.reset();
}

  guardar() {
    
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
     }

    console.log(this.miFormulario.value)
  }

  borrar(i: number) {
    this.favoritosArr.removeAt(i);
    
  }
}
