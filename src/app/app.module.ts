import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/main/main.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    MainComponent,
    FavoritesComponent,
    HeaderComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastModule,
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
