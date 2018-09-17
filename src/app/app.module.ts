import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import { ErrosModule } from './erros/erros.module';
import { AppComponent } from './app.component';
import { PhotosModules } from './photos/photos.modules';


@NgModule({
  declarations: [ // Em declaration só entra compomente.
    AppComponent 
  ],
  imports: [ // Aqui só entra modules
    BrowserModule, // tras recursos do angular para ser usado no navegador
    PhotosModules,
    AppRoutingModule, // QUANDO EU IMPORTO ELE JÁ VEM COM O BROWASER MODULO COM AS ROTAS CONFIGURADAS.
    // HttpClientModule // um providers... Preciso importar esse cara para tornar disponível o import nos outros modulos. Sobre providers
    //Em suma, o provider é aquele que sabe prover ao sistema de injeção uma instância do artefato injetado,.
    ErrosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
