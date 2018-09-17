import { NgModule } from "@angular/core";

import { PhotoCompoment } from "./photo.compoment";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        PhotoCompoment
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports:[
        PhotoCompoment
    ]
})
export class PhotoModule{
  //Cada compomente que eu criar da pasta photos vai ser um module.
}