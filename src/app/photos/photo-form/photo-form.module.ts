import { NgModule } from "@angular/core";

import { PhotoFormComponent } from "./photo-form.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        PhotoFormComponent
        //Se esse cara fosse ultilizado no tamplate de outro compomente ai eu tinha que exportar.
        //Eu vou exportar quando quiser que alguem me use,
        //Eu vou importar quando eu precisar usar alguem.
    ],
    
    imports: [
        CommonModule
    ]
})
export class PhotoFormModule{

}