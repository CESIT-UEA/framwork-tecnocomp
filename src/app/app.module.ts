import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { AprendizagemEInformaticaComponent } from './pages/modulos/aprendizagem-e-informatica/aprendizagem-e-informatica.component';
import { HeaderUnidadeComponent } from './template/header-unidade/header-unidade.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ListMenuComponent } from './template/component/list-menu/list-menu.component';
import { SlideComponent } from './components/slide/slide.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SafePipe } from './safe.pipe';
import { SpanAnimationComponent } from './components/span-animation/span-animation.component';
import { SpanAnimationTextoComponent } from './components/span-animation-texto/span-animation-texto.component';
import { SlideUnidadeComponent } from './components/slide-unidade/slide-unidade.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AprendizagemEInformaticaComponent,
    HeaderUnidadeComponent,
    ListMenuComponent,
    SlideComponent,
    SafePipe,
    SpanAnimationComponent,
    SpanAnimationTextoComponent,
    SlideUnidadeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatTabsModule,
    MatDialogModule,
    CommonModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
