import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { ImageHeaderComponent } from './home/image-header/image-header.component';
import { FormSearchComponent } from './home/form-search/form-search.component';
import { MoreInfoComponent } from './home/more-info/more-info.component';
import { ManagerComponent } from './manager/manager.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeComponent } from './home/home.component';
import { TablePlaceComponent } from './manager/table-place/table-place.component';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    ImageHeaderComponent,
    FormSearchComponent,
    MoreInfoComponent,
    ManagerComponent,
    HomeComponent,
    TablePlaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
