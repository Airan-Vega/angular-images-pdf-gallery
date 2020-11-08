import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { PhotoService } from '../../shared/services/photo.service';
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.page.html',
  styleUrls: ['./photo-form.page.scss'],
})
export class PhotoFormPage implements OnInit {
  private file: File;
  public photoSelected: string | ArrayBuffer;

  constructor(private router: Router, private photoService: PhotoService) {}

  ngOnInit(): void {}

  //It Select one photo and show how preview
  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      //It save the image in the file variable
      this.file = <File>event.target.files[0];
      //It Read the Image and Show the Image Preview
      const reader = new FileReader();
      reader.onload = (e) => (this.photoSelected = reader.result);
      reader.readAsDataURL(this.file);
    }
  }

  //It send data of form
  uploadPhoto(
    title: HTMLInputElement,
    description: HTMLTextAreaElement
  ): boolean {
    this.photoService
      .createPhoto(title.value, description.value, this.file)
      .subscribe(
        (res) => {
          this.router.navigate(['/photos']);
        },
        (err) => console.log(err)
      );
    return false;
  }
}
