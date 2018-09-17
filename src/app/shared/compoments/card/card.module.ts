import { NgModule } from "@angular/core";
import { CardComponent } from "./card.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent], // vai ser usado em PhotosCompoment
    imports: [CommonModule]
})
export class CardModule{

}