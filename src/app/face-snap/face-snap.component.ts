import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  snapButton!: string;

  ngOnInit() {
    this.title = 'Kitesurf';
    this.description = 'Mon sport préféré';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl =
      'https://images.unsplash.com/photo-1564499504739-bc4fc2ae8cba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2833&q=80';
    this.snapButton = '👍';
  }

  onSnap() {
    if (this.snapButton === '👍') {
      this.snaps++;
      this.snapButton = '👎';
    } else {
      this.snaps--;
      this.snapButton = '👍';
    }
  }
}
