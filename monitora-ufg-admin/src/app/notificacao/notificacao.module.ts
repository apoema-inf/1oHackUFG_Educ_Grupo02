import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NotificacaoRoutingModule } from './notificacao-routing.module';
import { NotificacaoListComponent } from './notificacao-list/notificacao-list.component';
import { CoreModule } from '../core/core.module';
import { NotificacaoFormComponent } from './notificacao-form/notificacao-form.component';
import { NotificacaoHistoricoComponent } from './notificacao-historico/notificacao-historico.component';

@NgModule({
  declarations: [NotificacaoListComponent, NotificacaoFormComponent, NotificacaoHistoricoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    NotificacaoRoutingModule
  ]
})
export class NotificacaoModule { }
