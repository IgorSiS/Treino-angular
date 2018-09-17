import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

//Esse compomente será útil para melhorar a responsabilidade de quem faz o que! 

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
//Photo list traz os dados e disponibiliza para photos que é quem renderiza 
export class PhotoListComponent implements OnInit { // para que eu não escreva errado

  photos: Photo[] = [];
  filter: string ='';
  // debounce : Subject<string> = new Subject<string>();
  hasMore: boolean = true; // vai começar aparecendo.
  currentPage: number = 1;
  userName: string;
     
  //O construtor vai ser só para injeção de dependencia. 
  constructor(
    // private photoService: PhotoService, 
    private activatedRoute: ActivatedRoute, private photoService: PhotoService){ // injeção de dependencia. preciso do HttpClientModule declarado para fazer a injeção de dependencia.
      //activatedRoute - > ter acesso ao valor que foi passado para a rota
  }
  
  //Parametrizando rotas e como obter valores do segmento parametrizado
  //Vai servir para inicialização e será executado depois do constructor.. Esse cara é um dos ciclo de vida de componente do angular
  ngOnInit(): void { // OnInit executa depois da instancia do AppCompoment e depois dos compomentes receber as inboutProt
    
    this.userName = this.activatedRoute.snapshot.params.userName;

    //Durante a nevegação da rota vai ser disponibilizado os dados para o compomente.
    //É no momento que a rota é ativado mas é antes do compomente ser carregado
    this.photos = this.activatedRoute.snapshot.data['photos']; // carregar os dados antes do compomente ser carregado.
    // this.debounce
    // .pipe(debounceTime(300)) // vai considerar a ultima depois que aguardar 300 milesegundos

    // .subscribe(filter => this.filter = filter); // esse cara vai ficar escutando sempre
    //o data e=permite pegar o valor de photos lá do modulo de routing

    // const userName = this.activatedRoute.snapshot.params.userName; // snapshot fotografia do que ta acontecendo naquele momento.
    // this.photoService.
    //   listFromUser(userName) // O userName vai receber o valor que o usuário digitar.
    //   .subscribe(photos => this.photos = photos);   
  }
   
  // ngOnDestroy(): void {
  //   this.debounce.unsubscribe();
  // }
  
  
  load(){
    this.photoService
    .listFromUserPaginated(this.userName,++this.currentPage)
    .subscribe(photos => {
      this.filter = '';
        this.photos = this.photos.concat(photos); // para o outro compomente saber que photos mudou., gerando uma nova referencia.
        // this.photos.push(...photos); //faz push de cada item de photos retornados do back end. É tipo, 1, 2, 3, 4, 5
        if(!photos.length) this.hasMore  = false; //se não veip daodo nenhum, não aparece;
    });
  }

}
