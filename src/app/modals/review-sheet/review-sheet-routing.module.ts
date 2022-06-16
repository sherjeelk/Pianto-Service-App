import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewSheetPage } from './review-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewSheetPageRoutingModule {}
