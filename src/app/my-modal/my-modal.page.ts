import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpService } from './../services/http.service';

@Component({
    selector: 'app-my-modal',
    templateUrl: './my-modal.page.html',
    styleUrls: ['./my-modal.page.scss'],
})


export class MyModalPage implements OnInit {

    public pokemons: any[] = [];

    constructor(
        private modalCtrl: ModalController,
        private httpService: HttpService,

        ) {}


    dismiss(){
        this.modalCtrl.dismiss();
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

