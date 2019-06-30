import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { NotificacaoFormComponent } from '../shared/notificacao/components/notificacao-form/notificacao-form.component';
import { MockupService } from '../services/mockup.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public usuario: Usuario;

  constructor(public modalController: ModalController, private service: MockupService) {
    this.usuario = this.service.usuarioLogado;
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: NotificacaoFormComponent
    });
    return await modal.present();
  }

}
