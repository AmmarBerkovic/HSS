import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MaterialsComponent } from './materials/materials.component';
import { FormsModule } from '@angular/forms';
import { BooksFormComponent } from './books-form/books-form.component';
import { VideosFormComponent } from './videos-form/videos-form.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AboutUsComponent,
    MaterialsComponent,
    BooksFormComponent,
    VideosFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    Ng2OrderModule, // importing the sorting package here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
