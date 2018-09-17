import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoModule } from './photo/photo-module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';

// declaration é como se fosse privado e expor é como se fosse publico
// para para PhtoCompoment seja enchergado no modulo de quem importou PhotoModules, usam o export
// declaration entra tudo que o modulo tem, se eu botar aqui e tiver 10 compomentes ele se enchergam.
@NgModule({     
    //Esse cara vai ser o agredador para que outro modulo possa importar ele.
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
        
        //Uma boa prática em cada module importar o commom module
        //CADA MODULE PRECISA IMPORTAR ESSES CARAS AQUI
        // HttpClientModule, // tirei do app.module e coloquei aqui, e agora photos depende dela.
        // CommonModule // para carregar a diretiva ngFor.. É uma boa prática em todo módulo que for criar, importar a diretiva commom module
    ]

})

export class PhotosModules{
}