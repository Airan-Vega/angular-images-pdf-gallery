import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { PhotoI } from '../../shared/models/photo';
import { PhotoService } from '../../shared/services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public photos: PhotoI[] = [];

  constructor(private router: Router, private photoService: PhotoService) {}

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(): void {
    this.photoService.getPhotos().subscribe(
      (res) => {
        this.photos = res;
      },
      (err) => console.log(err)
    );
  }

  selectedCard(id: string) {
    this.router.navigate([`/photos/${id}`]);
  }
}
