import { Component, OnInit } from '@angular/core';
import { HttpService } from './../services/http.service';
import { ModalController } from '@ionic/angular';
import { MyModalPage } from './../my-modal/my-modal.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public pokemons: any[] = [];

  constructor(
    private httpService: HttpService,
    private modalCtrl: ModalController,

  ) {}

    async openModal(){
      const modal = await this.modalCtrl.create({
        component: MyModalPage,
        cssClass: 'small-modal'
      });

      await modal.present();
    }

    async openTransparentModal(){
      const modal = await this.modalCtrl.create({
        component: MyModalPage,
        cssClass: 'transparent-modal'
      });

      await modal.present();
    }

    ngOnInit(){
      this.getPokemons()
    }

    getPokemons() {
      this.httpService.getPokemons().subscribe((data: any) => this.pokemons = data.results)
    } 

    showPokemon(id: number){
      console.log('Id do pokemon' + id)
    }

}
