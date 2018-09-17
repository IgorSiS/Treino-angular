import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime } from 'rxjs/operators'

@Component({
    selector: 'ap-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy{
    
    debounce : Subject<string> = new Subject<string>();
    
    @Output() onTyping = new EventEmitter<string>();
    @Input() value: string = '';
    
    ngOnInit(): void {
         this.debounce
            .pipe(debounceTime(300)) 
            .subscribe(filter => this.onTyping.emit(filter)); // o $event é o valor que é passado para o emit
            //Quando parar de digitar, para 300 milesegundos, inscreve.
            //Depois vei emitir o evento onTyping com o valor de filter, que é o $evento pego lá do photoListComponent.
      }

      ngOnDestroy(){
          this.debounce.unsubscribe();
      }
}