import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [
    ArticlesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    MaterialModule
  ]
})
export class ArticlesModule { }
