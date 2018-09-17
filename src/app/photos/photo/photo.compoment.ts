import { Component, Input } from "@angular/core";

@Component({
    selector: 'ap-photo', // prefixiar o compomente sempre. Quero usar esse compomente em outro, no app componente.
    templateUrl: 'photo.compoment.html'
})
//Essa classe pe como se fosse o "modelo"
//ESSE photoCompoment, vai ser a base de todos os outros compomentes relacionados a fotos.
export class PhotoCompoment{ // Um compomente obrigatoriamente precisa fazer parte de um módulo(Uma maneira de agrupar compomentes afins.)
    //Dado que meu compomente deve ter. Esses dados serão passados para o meu tamplate através do databinding
    @Input() description=''; //Se alguem de fora usar o description ou a url vai ser atribuido aqui
    @Input() url='';
    // inbound property  > aceitam receber um valor através da tua forma declarativa
    
    // description = 'Angular';
    // url = 'https://pt.wikipedia.org/wiki/Angular_(plataforma_de_aplica%C3%A7%C3%B5es)#/media/File:Angular_full_color_logo.svg';

}