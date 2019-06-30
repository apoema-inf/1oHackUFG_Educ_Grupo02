
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNaveComponent } from './side-nave/side-nave.component';

import { LayoutModule } from '@angular/cdk/layout';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CuststableComponent } from './dashboard/custstable/custstable.component';
import { NotificacaoModule } from './notificacao/notificacao.module';
import { CoreModule } from './core/core.module';




@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SideNaveComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    CuststableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    CoreModule,
    NotificacaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
