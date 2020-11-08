import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'photos',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./views/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./views/photo-form/photo-form.module').then(
        (m) => m.PhotoFormModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./views/photo-preview/photo-preview.module').then(
        (m) => m.PhotoPreviewModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
