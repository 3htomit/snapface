import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  snapButton!: string;

  ngOnInit() {
    this.snapButton = '👍';
  }

  onSnap() {
    if (this.snapButton === '👍') {
      this.faceSnap.snaps++;
      this.snapButton = '👎';
    } else {
      this.faceSnap.snaps--;
      this.snapButton = '👍';
    }
  }
}
