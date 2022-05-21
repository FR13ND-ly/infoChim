import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MaterialModule } from '../shared/material/material.module';
import { CommentsComponent } from '../shared/comments/comments.component';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { DefinitionComponent } from '../definition/definition.component';
import { ClassificationComponent } from '../classification/classification.component';
import { NomenclatureComponent } from '../nomenclature/nomenclature.component';
import { MethodsOfObtainingComponent } from '../methods-of-obtaining/methods-of-obtaining.component';
import { PhysicsPropertiesComponent } from '../physics-properties/physics-properties.component';
import { ChemistryPropertiesComponent } from '../chemistry-properties/chemistry-properties.component';
import { TitlesComponent } from '../shared/titles/titles.component';
import { VideoComponent } from '../video/video.component';

@NgModule({
  declarations: [
    ArticlesComponent,
    HeaderComponent,
    FooterComponent,
    CommentsComponent,
    LandingPageComponent,
    DefinitionComponent,
    ClassificationComponent,
    NomenclatureComponent,
    MethodsOfObtainingComponent,
    PhysicsPropertiesComponent,
    ChemistryPropertiesComponent,
    TitlesComponent,
    VideoComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class ArticlesModule { }
