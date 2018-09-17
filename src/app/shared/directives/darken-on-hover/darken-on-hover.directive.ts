import { Directive, ElementRef, HostListener, Renderer, Input } from "@angular/core";

@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective{

    @Input() brightness = '70%'
   
    constructor(private el: ElementRef, private render: Renderer){ // eu vou pegar o elemento do DOM no qual essa diretiva ta adicionada, e vou te dar uma referencia
    }
    
    @HostListener('mouseover') // posso passar qual o evento que eu quero responder do elemento host
    darkenOn(){
        this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
    }

    @HostListener('mouseleave')
    darkenOff(){
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)'); // prpriedade do css que quero mecher e o valor que quero da a ela.
    }
        

}