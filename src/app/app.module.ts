import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material';
import { AppRouting } from './app-routing';



import { AppComponent } from './items/cn_app.component';
import { HomeComponent } from './_modules/home/items/cn_home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    AppRouting,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
