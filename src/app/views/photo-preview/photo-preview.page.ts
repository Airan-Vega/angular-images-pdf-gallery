import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../../shared/services/photo.service';
import { PhotoI } from '../../shared/models/photo';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.page.html',
  styleUrls: ['./photo-preview.page.scss'],
})
export class PhotoPreviewPage implements OnInit {
  private id: string;
  public photo: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.urlParams();
  }

  public urlParams() {
    return this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.photoService.getPhoto(this.id).subscribe(
        (res) => {
          this.photo = res;
        },
        (err) => console.log(err)
      );
    });
  }

  public deletePhoto(id: string) {
    this.photoService.deletePhoto(id).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/photos']);
      },
      (err) => console.log(err)
    );
  }

  public updatePhoto(
    title: HTMLInputElement,
    description: HTMLTextAreaElement
  ): boolean {
    this.photoService
      .updatePhoto(this.id, title.value, description.value)
      .subscribe(
        (res) => {
          this.router.navigate(['/photos']);
        },
        (err) => console.log(err)
      );
    return false;
  }
}
