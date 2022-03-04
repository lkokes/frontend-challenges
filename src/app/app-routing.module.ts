import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClipboardLandingPageComponent } from './clipboard-landing-page/clipboard-landing-page.component';
import { HuddleLandingPageComponent } from './huddle-landing-page/huddle-landing-page.component';
import { PreviewCardComponent } from './preview-card/preview-card.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { SocialProofSectionComponent } from './social-proof-section/social-proof-section.component';
import { TimeTrackingDashboardComponent } from './time-tracking-dashboard/time-tracking-dashboard.component';
import { TipCalculatorAppComponent } from './tip-calculator-app/tip-calculator-app.component';

const routes: Routes = [
  { path: 'qr-code', component: QrCodeComponent },
  { path: 'social-proof-section', component: SocialProofSectionComponent },
  { path: '3-column-preview-card', component: PreviewCardComponent },
  { path: 'huddle-landing-page', component: HuddleLandingPageComponent },
  { path: 'clipboard-landing-page', component: ClipboardLandingPageComponent },
  { path: 'tip-calculator-app', component: TipCalculatorAppComponent },
  { path: 'time-tracking-dashboard', component: TimeTrackingDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
