import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-my-modal',
    templateUrl: './my-modal.page.html',
    styleUrls: ['./my-modal.page.scss'],
})

export class MyModalPage implements OnInit {

    constructor(
        private modalCtrl: ModalController,
        ) {}

    ngOnInit(){

    }

    dismiss(){
        this.modalCtrl.dismiss();
    }
}

