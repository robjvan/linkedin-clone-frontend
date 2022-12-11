import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-start-post',
  templateUrl: './start-post.component.html',
  styleUrls: ['./start-post.component.scss'],
})
export class StartPostComponent implements OnInit {
  constructor(
    /// Ionic/Angular uses ModalController to help with modals
    public modalController: ModalController
  ) {}

  ngOnInit() {}

  async presentModal() {
    /// Create modal to be shown
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'my-custom-class2',
    });
    /// Show the modal
    await modal.present();

    /// Capture the role used when dismissing the modal
    const { data, role } = await modal.onDidDismiss();
    try {
    console.log(`data = ${data.post.body}, role = ${role}`);
    } catch (err) {
    console.log(`data = ${data}, role = ${role}`);
    }
  }
}
