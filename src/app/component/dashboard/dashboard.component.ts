import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  studenstList: Student[] = [];

  studentObj: Student = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
  };
  id: string = '';
  first_name: string = '';
  last_name: string = '';
  email: string = '';
  mobile: string = '';

  constructor(private auth: AuthService, private data: DataService) {}

  ngOnInit() {
    this.getAllStudent();
  }

  // LogOut() {
  //   this.auth.logout();
  // }

  getAllStudent() {
    this.data.grtAllStudent().subscribe(
      (res) => {
        this.studenstList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
      },
      (error) => {
        alert('Error While fetching student data');
      }
    );
  }
  resetForm() {
    this.id = '';
    this.first_name = '';
    this.last_name = '';
    this.email = '';
    this.mobile = '';
  }

  addStudent() {
    if (
      this.first_name == '' ||
      this.last_name == '' ||
      this.email == '' ||
      this.mobile == ''
    ) {
      alert('fill all input fields');
    }
    this.studentObj.id = '';
    this.studentObj.first_name = this.first_name;
    this.studentObj.last_name = this.last_name;
    this.studentObj.email = this.email;
    this.studentObj.mobile = this.mobile;
    this.data.addStudent(this.studentObj);
    this.resetForm();
  }

  updateStudent() {}

  deleteStudent(student: Student) {
    if (
      window.confirm(
        'Are you sure you want to delete' +
          student.first_name +
          ' ' +
          student.last_name +
          '  ?'
      )
    ) {
      this.data.deletStudent(student);
    }
  }
}
