import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AprendizagemEInformaticaComponent } from './pages/modulos/aprendizagem-e-informatica/aprendizagem-e-informatica.component';
import { BehaviorismoComponent } from './pages/modulos/components/behaviorismo/behaviorismo.component';
import { ConstrutivismoComponent } from './pages/modulos/components/construtivismo/construtivismo.component';
import { SocioconstrutivismoComponent } from './pages/modulos/components/socioconstrutivismo/socioconstrutivismo.component';
import { ConstrucionismoComponent } from './pages/modulos/components/construcionismo/construcionismo.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {
    path:'teorias-da-aprendizagem',
    component:AprendizagemEInformaticaComponent,
    children: [
      { path: '', component: BehaviorismoComponent },
      { path: 'construtivismo', component: ConstrutivismoComponent },
      { path: 'socioconstrutivismo', component: SocioconstrutivismoComponent },
      { path: 'construcionismo', component: ConstrucionismoComponent },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
