import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { NotificacaoFormComponent } from './components/notificacao-form/notificacao-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NotificacaoFormComponent
  ],
  entryComponents: [
    NotificacaoFormComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [
    NotificacaoFormComponent
  ]
})
export class NotificacaoModule { }
