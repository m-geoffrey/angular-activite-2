import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyAcHQnY8jg5XQ9Ube6id8Po7G0-Igu1-p8",
      authDomain: "angular-activite2-3eb67.firebaseapp.com",
      databaseURL: "https://angular-activite2-3eb67.firebaseio.com",
      projectId: "angular-activite2-3eb67",
      storageBucket: "",
      messagingSenderId: "847035325129",
      appId: "1:847035325129:web:47f970ae51a65018"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
