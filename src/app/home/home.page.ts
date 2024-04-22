import { Component } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, 
  addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
  import { Observable } from 'rxjs';
  export interface Note {
    id?: string;
    name: string;
    description: string;
  }
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  notes: Note[] = [];
  constructor(private firestore: Firestore) {
    this.getNotes().subscribe(res => {
      this.notes = res;
    });
  }
  getNotes(): Observable<any[]> {
    const notesRef = collection(this.firestore, 'note');
    return collectionData(notesRef, { idField: 'id'}) as Observable<any[]>;
  }
}
