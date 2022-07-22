import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  constructor() {}

  ngOnInit(): void {
    this.faceSnaps = [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1564499504739-bc4fc2ae8cba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2833&q=80',
        title: 'Kitesurf',
        description: 'Mon sport préféré',
        snaps: 50,
        createdDate: new Date(),
        location: 'Sardaigne',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
        title: 'Mountains',
        description: 'Mon lieu favoris',
        snaps: 150,
        createdDate: new Date(),
        location: 'Alpes Françaises',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
        title: 'Photography',
        description: 'Mon activité préférée',
        snaps: 300,
        createdDate: new Date(),
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1630348637723-25d84aac0dd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
        title: 'Nantes',
        description: 'Ma ville',
        snaps: 190,
        createdDate: new Date(),
        location: 'Nantes',
      },
      {
        imageUrl:
          'https://dreamyachtsales.imgix.net/2020/04/lagoon-42-main-2-2.jpg?auto=compress%2Cformat&ixlib=php-1.2.1',
        title: 'Dream',
        description: 'Faire le tour du monde en Lagoon 42',
        snaps: 230,
        createdDate: new Date(),
        location: 'Ocean',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1527401850656-0f34108fdb30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
        title: 'Tropical island',
        description: 'Des vacances bien méritées',
        snaps: 120,
        createdDate: new Date(),
      },
    ];
  }
}
