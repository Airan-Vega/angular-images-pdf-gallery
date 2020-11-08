import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoFormPage } from './photo-form.page';
import { PhotoFormRoutingModule } from './photo-form-routing.module';

@NgModule({
  declarations: [PhotoFormPage],
  imports: [CommonModule, PhotoFormRoutingModule],
})
export class PhotoFormModule {}
