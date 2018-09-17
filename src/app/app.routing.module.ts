import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";
import { NotFoundComponent } from "./erros/not-found/not-found.component";
import { PhotoListResolver } from "./photos/photo-list/photo-list.resolver";

//Isso aqui é executado antes do back-end. Vai interceptar as rotas 

const routes: Routes = [ // Se eu tipar dessa forma, ele entende que cada item desse array é um objeto javascript.
    {
        path: 'user/:userName',
         component: PhotoListComponent,
          resolve: {
              photos: PhotoListResolver //esse photos vai ser acessado daqui: data['photos'];
          }
    },
    {path: 'p/add', component: PhotoFormComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
   imports: [
       //O estado atual do roteador é que vai definir o que vai ser mostrado no <router-outlet>
       RouterModule.forRoot(routes)// linkar com meu arquivo de rotas. Importa o resultado de forRoot(que é http://localhost:4200/ routes...)
   ],
   exports: [RouterModule] // quem importar AppRoutingModeulo(no caso o app.module) vai ganhar de quebra o RouterModule, que é o modulo de rotas do angular
   //com isso o meu app.Module ta ganhando todas as diretivas de rotas do AppRoutingModule
    
   //O <router-outlet> só funciona por causa dessa exportação do RouterModule
   // o <router-outlet> vai abrir lacuna para de acordo com o endereço renderizar e exibir meu compomente.
})
export class AppRoutingModule{

}