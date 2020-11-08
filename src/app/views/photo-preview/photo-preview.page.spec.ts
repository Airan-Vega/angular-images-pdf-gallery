import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPreviewPage } from './photo-preview.page';

describe('PhotoPreviewComponent', () => {
  let component: PhotoPreviewPage;
  let fixture: ComponentFixture<PhotoPreviewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoPreviewPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoPreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
