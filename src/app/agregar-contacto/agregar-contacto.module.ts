import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgregarContactoPageRoutingModule } from './agregar-contacto-routing.module';
import { AgregarContactoPage } from './agregar-contacto.page';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarContactoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AgregarContactoPage]
})
export class AgregarContactoPageModule {
}
