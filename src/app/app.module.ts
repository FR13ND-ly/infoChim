import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { LandingPageComponent } from './landing-page/landing-page.component';
import { DefinitionComponent } from './definition/definition.component';
import { ClassificationComponent } from './classification/classification.component';
import { NomenclatureComponent } from './nomenclature/nomenclature.component';
import { MethodsOfObtainingComponent } from './methods-of-obtaining/methods-of-obtaining.component';
import { PhysicsPropertiesComponent } from './physics-properties/physics-properties.component';
import { ChemistryPropertiesComponent } from './chemistry-properties/chemistry-properties.component';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DefinitionComponent,
    ClassificationComponent,
    NomenclatureComponent,
    MethodsOfObtainingComponent,
    PhysicsPropertiesComponent,
    ChemistryPropertiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
