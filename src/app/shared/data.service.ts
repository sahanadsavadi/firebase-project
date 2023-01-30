import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private AngularFireStore: AngularFirestore) {}

  // add student
  addStudent(student: Student) {
    student.id = this.AngularFireStore.createId();
    return this.AngularFireStore.collection('/students').add(student);
  }

  //get all student
  grtAllStudent() {
    return this.AngularFireStore.collection('/students').snapshotChanges();
  }

  //delet student
  deletStudent(student: Student) {
    return this.AngularFireStore.doc('/students' + student.id).delete();
  }

  // update student
  updateStudent(student: Student) {
    this.deletStudent(student);
    this.addStudent(student);
  }
}
