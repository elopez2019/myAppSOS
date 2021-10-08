import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    public database: AngularFirestore
    ) { }

  createUser(data: any, path: string, id: string) {
    console.log("crear usuarios");
    const collection = this.database.collection(path);
    return collection.doc(id).set(data);
  }

  getUser(path: string, id: string) {
    const collection = this.database.collection(path);
    return collection.doc(id).valueChanges();
  }

  deleteUser(path: string, id: string) {
      const collection = this.database.collection(path);
      return collection.doc(id).delete();
  }

  updateUser(data: any, path: string, id: string) {
    const collection = this.database.collection(path);
    return collection.doc(id).update(data);
}
} 
