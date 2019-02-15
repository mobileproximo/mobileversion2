import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GlobalvariableProvider} from "../../../providers/globalvariable/globalvariable";

/**
 * Generated class for the JoniPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-joni',
  templateUrl: 'joni.html',
})
export class JoniPage {
  public service;
  private datareception:any={};
  private dataenvoi:any={};


  constructor(public glb:GlobalvariableProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.glb.recu={};
    this.glb.showRecu=false;
    this.service='Envoi';
    this.datareception.image = this.dataenvoi.image = this.glb.IMAGE_BASE_URL+"Icon-19.png";
    this.datareception.oper = this.dataenvoi.oper='0007';
    this.dataenvoi.idlieu =1;
    this.datareception.operateur = this.dataenvoi.operateur='Joni-Joni';
    this.glb.HEADERTITELE.src = this.glb.IMAGE_BASE_URL+"Petite-Icon-03.png";
    this.glb.HEADERTITELE.title = "Transfert d'argent";


    console.log('ionViewDidLoad JoniPage');
  }
  selectionService(){

    console.log("changement "+this.service)

  }

}
