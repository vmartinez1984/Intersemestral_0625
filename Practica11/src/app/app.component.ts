import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practica 11';

  peliculas: PeliculaDto[]=[]

    constructor(private httpClient: HttpClient){
      //const baseUrl = "http://localhost:3000"
      const baseUrl = 'https://fes-aragonpractica05.vercel.app';

      this.httpClient.get<PeliculaDto[]>(baseUrl + '/api/peliculas').subscribe({
        next:(peliculas)=>{
          this.peliculas = peliculas
          console.log(this.peliculas)
        }
      })
    }
}

export interface PeliculaDto {
  titulo: string;
  visto: boolean;
  resumen: string;
  id: number;
}

