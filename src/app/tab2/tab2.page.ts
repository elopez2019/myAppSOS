import { Component, NgModule } from '@angular/core';
import { AgregarContactoPage } from "../agregar-contacto/agregar-contacto.page";
import { Router, RouterModule, Routes } from "@angular/router";
import { NavController, NavParams } from '@ionic/angular';


const routes: Routes = [
  {
    path: 'agregar-contacto',
    loadChildren: () => import('../agregar-contacto/agregar-contacto.module').then( m => m.AgregarContactoPageModule)
  }
];
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  list = [];

  constructor(private router: Router, private navCtrl: NavController) {

    this.list = [
      {
        'nombre': "Mami",
        'telefono': 57145106
      },
      {
        'nombre': "Ito",
        'telefono': 36613388
      }
    ]
  
  }


  
  agregar(){
      console.log("agregar");
      this.router.navigate(['/agregar-contacto']);
  }

}


