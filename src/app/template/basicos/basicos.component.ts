import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miformulario') miformulario: NgForm;
  initForm = {
    producto: 'rxt 480ti',
    precio: 10,
    exitencias:10
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    console.log(this.miformulario);
    this.miformulario.resetForm({
      precio: 0,
      exitencias:0
    });
  }

  nombrevalido():boolean {
    return this.miformulario?.controls.producto?.invalid && this.miformulario?.controls.producto?.touched
  }

  preciovalido():boolean {
    
    return this.miformulario?.controls.precio?.touched && this.miformulario?.controls.precio?.value < 0;
  }


}
