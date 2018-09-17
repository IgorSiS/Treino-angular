import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ap-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

 @Input() hasMore: boolean = false; //Se tem mais coisa pra exibir ou não
 //O angular só detecta que uma inboudProperty mudou quando há uma nova atribuição nela,
 //por isso preciso usar o concat no photo.list.compoment para ele atualizar e fazer a paginação

  constructor() { }

  ngOnInit() {
  }

}
