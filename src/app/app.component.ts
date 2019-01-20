import { Component } from '@angular/core';
import * as firebase from 'firebase/app'; // a verifier sans le /app

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyDS1kqIdUjgRkb0S6Y8uBKMQ9grtrZsam0",
      authDomain: "newpostblog-545f9.firebaseapp.com",
      databaseURL: "https://newpostblog-545f9.firebaseio.com",
      projectId: "newpostblog-545f9",
      storageBucket: "newpostblog-545f9.appspot.com",
      messagingSenderId: "699455423418"
    };
    firebase.initializeApp(config);  
  }
}
