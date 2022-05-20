import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChemistryPropertiesComponent } from '../chemistry-properties/chemistry-properties.component';
import { ClassificationComponent } from '../classification/classification.component';
import { DefinitionComponent } from '../definition/definition.component';
import { MethodsOfObtainingComponent } from '../methods-of-obtaining/methods-of-obtaining.component';
import { NomenclatureComponent } from '../nomenclature/nomenclature.component';
import { PhysicsPropertiesComponent } from '../physics-properties/physics-properties.component';
import { ArticlesComponent } from './articles.component';

const routes: Routes = [
    {path: '', component : ArticlesComponent, children: [
        {path: 'definitie', component: DefinitionComponent},
        {path: 'clasificare', component: ClassificationComponent},
        {path: 'nomenclatura', component: NomenclatureComponent},
        {path: 'metode-de-obtinere', component: MethodsOfObtainingComponent},
        {path: 'proprietati-fizice', component: PhysicsPropertiesComponent},
        {path: 'proprietati-chimice', component: ChemistryPropertiesComponent}
    ]}
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticlesRoutingModule { }