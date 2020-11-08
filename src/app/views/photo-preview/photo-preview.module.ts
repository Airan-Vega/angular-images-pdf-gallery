import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoPreviewPage } from './photo-preview.page';
import { PhotoPreviewRoutingModule } from './photo-preview-routing.module';

@NgModule({
  declarations: [PhotoPreviewPage],
  imports: [CommonModule, PhotoPreviewRoutingModule],
})
export class PhotoPreviewModule {}
