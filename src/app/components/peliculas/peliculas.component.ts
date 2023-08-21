import { Component, OnInit,DoCheck,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Array<any>;

  constructor(){
    this.titulo = "Peliculas";
    this.peliculas = [
        {year:'2016',title: 'Spiderman', image: 'https://gmedia.playstation.com/is/image/SIEPDC/marvel-spiderman-pdp-hero-desktop-01-ps4-en-11nov20?$2400px$'},
        {year:'2016',title: 'Batman', image: 'https://i.3djuegos.com/juegos/3246/batman_el_caballero_oscuro/fotos/ficha/batman_el_caballero_oscuro-1689379.webp'},
        {year:'2014',title: 'Batman vs Superman', image:'https://www.mubis.es/media/covers/2670/29503/the-amazing-spider-man-l_cover.jpg'}
    ];
  }

  ngOnInit(){
    console.log(this.peliculas);
    console.log("Componente iniciado");
  }

  ngDoCheck(){
    console.log("Componente iniciado");
  }

  ngOnDestroy(){
    console.log("Componente se va eliminar");
  }

    public cambiarTitulo(){
      this.titulo = "El titulo ha sido cambiado";
    }

    
}
