import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreviewCardComponent } from './preview-card/preview-card.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { SocialProofSectionComponent } from './social-proof-section/social-proof-section.component';

const routes: Routes = [
  { path: 'qr-code', component: QrCodeComponent },
  { path: 'social-proof-section', component: SocialProofSectionComponent },
  { path: '3-column-preview-card', component: PreviewCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
