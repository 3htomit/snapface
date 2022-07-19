import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  firstSnap!: FaceSnap;
  secondSnap!: FaceSnap;
  thirdSnap!: FaceSnap;

  ngOnInit() {
    this.firstSnap = new FaceSnap(
      'https://images.unsplash.com/photo-1564499504739-bc4fc2ae8cba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2833&q=80',
      'Kitesurf',
      'Mon sport préféré',
      6,
      new Date()
    );
    this.secondSnap = new FaceSnap(
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      'Mountains',
      'Mon lieu favoris',
      8,
      new Date()
    );
    this.thirdSnap = new FaceSnap(
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
      'Photography',
      'Mon activité préférée',
      2,
      new Date()
    );
  }
}
