import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { MiComponent } from './components/mi-components/mi-component.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { MenuComponent } from './components/menu/menu.component';
import { from } from 'rxjs';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponent,
    PeliculasComponent,
    PruebasComponent,
    HeaderComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    PaginaComponent,
    MenuComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // cargo rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
