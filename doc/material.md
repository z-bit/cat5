[Home](../README.md)
## Install Material

They found out that tree shaking does not work with all the material components in one module. So we are back to declaring each single component (now as a module) separately.

    • npm install --save @angular/material  
    • npm install --save @angular/cdk    
    • npm install --save @angular/animations  
    • npm install --save hammerjs

create file ***[app/app-material.ts](./app-material.ts)*** 


    Though it is a module it cannot be named as such since ng generate component  
    would not know to which *.module.ts to add the entries for the new component.

edit file ***.angular-cli.json***

    "scripts": [
        "../node_modules/hammerjs/hammer.min.js"
    ],


edit file ***src/styles.css***

    @import "~@angular/material/prebuilt-themes/indigo-pink.css";
    @import '~https://fonts.googleapis.com/icon?family=Material+Icons';

edit file ***app/app.module.ts***

    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { AppMaterialModule } from './app-material';
    
    import { AppComponent } from './app.component';
    
    @NgModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        BrowserModule,
        AppMaterialModule,
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }


Source:
https://github.com/angular/material2/blob/master/guides/getting-started.md
