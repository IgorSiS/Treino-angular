import { NgModule } from "@angular/core";

import { PhotoCompoment } from "../photo/photo.compoment";
import { PhotosComponent } from "./photos/photos.component";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { FilterByDescription } from "./filter_by_description.pipe";
import { CommonModule } from "@angular/common";
import { PhotoModule } from "../photo/photo-module";
import { PhotoListComponent } from "./photo-list.component";
import { CardModule } from "../../shared/compoments/card/card.module";
import { SearchComponent } from "./search/search.component";
import { DarkenOnHoverModule } from "../../shared/directives/darken-on-hover/darken-on-hover.module";

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription,
        SearchComponent
        
     ],
     imports: [
         CommonModule,
         PhotoModule, // um dos compomentes que eu tenho vai depender desse cara.
         CardModule, // quwro usar ele em PhotosCompoment , então o compomente exportado por CardModule, vai ser usado em photosCompoment
         DarkenOnHoverModule
     ]
})
export class PhotoListModule{

}