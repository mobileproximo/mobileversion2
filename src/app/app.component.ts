import {Component, ViewChild} from '@angular/core';
import {MenuController, Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { HomePage } from '../pages/home/home';
import {ConnexionPage} from "../pages/connexion/connexion";
import {EncaissementPage} from "../pages/encaissement/encaissement";
import {TransfertPage} from "../pages/transfert/transfert";
import {MonnaiePage} from "../pages/monnaie/monnaie";
import {ComptePage} from "../pages/compte/compte";
import {GestionPage} from "../pages/gestion/gestion";
import {GlobalvariableProvider} from "../providers/globalvariable/globalvariable";
import {ParametrePage} from "../pages/parametre/parametre";
import {SplashScreen} from "@ionic-native/splash-screen";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  private pages:any;
  @ViewChild(Nav) nav: Nav;

  constructor(private splashScreen:SplashScreen,public platform: Platform, statusBar: StatusBar,public Glb:GlobalvariableProvider) {
    this.pages = [
      { title: 'Acceuil', component: HomePage,src:this.Glb.IMAGE_BASE_URL+'Icon-08.png' },
      { title: 'Paiement Factures', component: EncaissementPage,src:this.Glb.IMAGE_BASE_URL+'Petite-Icon-04.png' },
      { title: "Transfert d'argent", component: TransfertPage,src:this.Glb.IMAGE_BASE_URL+'Petite-Icon-03.png' },
      { title: "Recharge electronique", component: TransfertPage,src:this.Glb.IMAGE_BASE_URL+'Petite-Icon-02.png' },
      { title: 'Monnaie electronique', component: MonnaiePage,src:this.Glb.IMAGE_BASE_URL+'Petite-Icon-05.png' },
      { title: 'Compte', component: ComptePage,src:this.Glb.IMAGE_BASE_URL+'Petite-Icon-07.png' },
      { title: 'Gestion', component: GestionPage,src:this.Glb.IMAGE_BASE_URL+'Petite-Icon-06.png.png' },
      { title: 'Parametres', component: ParametrePage,src:this.Glb.IMAGE_BASE_URL+'Icone_Parametrage.png' },
      { title: 'Deconnexion', component: ConnexionPage,src:this.Glb.IMAGE_BASE_URL+'Icon-13.png' }

    ];
    platform.ready().then(() => {

      statusBar.styleDefault();

    });
  }
  verspage(page){
    if(page.component==ConnexionPage)
      this.nav.setRoot(page.component);
    else this.nav.push(page.component);
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // do whatever you need to do here.
      setTimeout(() => {
        this.splashScreen.hide();
      }, 100);
    });
  }
}

