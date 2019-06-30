import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificacaoListComponent } from './notificacao-list/notificacao-list.component';
import { NotificacaoFormComponent } from './notificacao-form/notificacao-form.component';

const routes: Routes = [
  { path: 'avalia-notificacao', component: NotificacaoListComponent,
    children: [
      { path: ':index', component: NotificacaoFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificacaoRoutingModule { }
