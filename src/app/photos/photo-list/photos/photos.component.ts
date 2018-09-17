import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
    selector: 'ap-photos',
    templateUrl: './photos.component.html',
    styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges{ // para que eu não escreva errado

    @Input() photos: Photo[] = []; ;// ESSE ARRAY VAI SER ATUALIZADO

    rows: Photo[] = [];

    constructor() {

    }

    ngOnChanges(changes: SimpleChanges){ // Recebe como argumento possível mudandãs das inbout propertys do meu compomoente.
        if(changes.photos) // Se mudou alguma coisa em na inboud property da photo, então executa isso.
        this.rows = this.groupColumns(this.photos); // Tem que testar por foto, porque pode ter várias que mudou.
    }

    groupColumns(photos: Photo[]){
        const newRows = [];
        
        for(let index = 0; index < photos.length; index+=3){
            newRows.push(photos.slice(index,index + 3));
            console.log(newRows);
        }
        return newRows;
    }
}
