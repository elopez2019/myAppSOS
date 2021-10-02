import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarContactoPageRoutingModule } from './agregar-contacto-routing.module';

import { AgregarContactoPage } from './agregar-contacto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarContactoPageRoutingModule
  ],
  declarations: [AgregarContactoPage]
})
export class AgregarContactoPageModule {}
