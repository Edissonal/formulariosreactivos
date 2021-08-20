import { Component, OnInit } from '@angular/core';


interface Persona{
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
  


export class DinamicosComponent implements OnInit {

  nuevojuego: string = '';
  persona: Persona = {
    nombre: 'Fernando',
    favoritos: [
      { id: 1, nombre: 'Metal Gear' },
      { id: 2, nombre: 'Death Stranding' },
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    console.log('formulario posteado');
    
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevojuego
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevojuego = '';
  }
  
}
