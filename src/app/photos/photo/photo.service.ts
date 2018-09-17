import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const API = 'http://localhost:3000';
// O único photoService para a aplicação inteira
//photoService agora é injetável e se eu tiver 30 compomentes e quiser usar o photoService eu posso usar o mesmo objeto.
@Injectable({providedIn: 'root'}) // Qualquer compomente da minha aplicação que precisar do photoService vai ter esse cara disponível
export class PhotoService{
    
   constructor(private http: HttpClient){ // Está torandno uma propriedade da classe e declarando uma variavel
   }

   listFromUser(userName: string){
         return this.http
            .get<Photo[]>(API + '/' + userName + '/photos');
   }


   listFromUserPaginated(userName: string, page: number){
      //Criação da query string
      const params = new HttpParams().append('page',page.toString()); //  o page é o valor da página que eu quero do back end, se de 1 a 12 ou de 13 a 25 e etc...
      return this.http
         .get<Photo[]>(API + '/' + userName + '/photos', {params});
}
}