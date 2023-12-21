import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AprendizagemEInformaticaComponent } from './pages/modulos/aprendizagem-e-informatica/aprendizagem-e-informatica.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {
    path:'teorias-da-aprendizagem',
    component:AprendizagemEInformaticaComponent,
    children: [
      { path: '', component: HomeComponent },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
