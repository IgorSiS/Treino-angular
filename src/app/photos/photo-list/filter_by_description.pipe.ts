import { Pipe, PipeTransform } from "@angular/core";
import { Photo } from "../photo/photo";

@Pipe({
    name: 'filterByDescription'
})
export class FilterByDescription implements PipeTransform {
    
    // primeiro parametro quem eu quero aplicar a transformação...o photos vai ser a lista de foto
    // o segundo parametro é um array com todos os parametros que eu passar.
    // comoo só vai ter um, eu vou chamar de description
    transform(photos: Photo[], descriptionQuery: string) { 

        descriptionQuery = descriptionQuery
        .trim() // tirar os espaços
        .toLowerCase(); // caixa baixa

        if(descriptionQuery){
            return photos.filter(photo => photo.description.toLowerCase().includes(descriptionQuery)); 
            //pra cada foto, pega a description trasnforma em minusculo e verifica dentro dela se tem a string que eu digitei.
            //includes, se faz parte dessa string o que eu digitei.
        }else{
            return photos; // se não retorna a lista direto
        }
    }
}