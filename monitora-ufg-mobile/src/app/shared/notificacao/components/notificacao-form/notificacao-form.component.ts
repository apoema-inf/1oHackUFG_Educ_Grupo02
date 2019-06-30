import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

import { MockupService } from 'src/app/services/mockup.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CentroAula } from 'src/app/models/centro-aula';

@Component({
  selector: 'app-notificacao-form',
  templateUrl: './notificacao-form.component.html',
  styleUrls: ['./notificacao-form.component.scss'],
})
export class NotificacaoFormComponent implements OnInit {

  public form: FormGroup;
  public centroAula: CentroAula;

  constructor(
    private modalController: ModalController,
    public alertController: AlertController,
    private service: MockupService,
    private formBuilder: FormBuilder
    ) {
      this.centroAula = this.service.getOneCentroAulas(4);
    }

  ngOnInit() {
    this.initForm();
  }

  async onCreateNotificacao() {
    if (this.form.valid) {
      await this.presentAlert();
    }
  }

  onCloseModal() {
    this.modalController.dismiss();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      // header: 'Ei',
      message: 'Ei, Você apagou as luzes? 🤔',
      buttons: [{
        text: 'Apaguei 👍',
        handler: () => {
          this.service.insertNotificacao(this.sala.value, this.centroAula);
          this.onCloseModal();
        }
      }]
    });

    await alert.present();
  }

  get sala(): FormControl {
    return this.form.get('sala') as FormControl;
  }

  private initForm() {
    this.form = this.formBuilder.group({
      sala: ['', Validators.required]
    });
  }

}
