import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    public database: AngularFirestore
    ) { }

  createUser() {
    console.log("crear usuarios");
    //this.database.
  }
} 
