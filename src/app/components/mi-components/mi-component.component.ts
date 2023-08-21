import { Component } from "@angular/core"

@Component({
    selector: 'app-micomponent',
    templateUrl: './mi-component.component.html',
})

export class MiComponent{
    public titulo:string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas:boolean;

    constructor(){
        this.titulo = " Componente uno ";
        this.comentario = " Este es el primer componente  ";
        this.year = 2010;
        this.mostrarPeliculas = true;
    }

    ocultarPeliculas(){
        this.mostrarPeliculas = false;
    }

}