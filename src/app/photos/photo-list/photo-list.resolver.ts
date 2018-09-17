import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { PhotoService } from "../photo/photo.service";
import { Photo } from "../photo/photo";



@Injectable({providedIn: 'root'}) // INJETANDO O PHOTO SERVICE e pra eu poder usar esse resolve de qualquer lugar
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{

    constructor(private service: PhotoService){}
//Vai ser acionado quando for chamado la na rota
//ActivatedRouteSnapshot -> o que ta acontecendo na rota naquele momento
// RouterStateSnapshot -> não vamos usar
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){ ;;
        const userName = route.params.userName;
        return this.service.listFromUserPaginated(userName,1); // vai trazer de 1 a 12
    }
}