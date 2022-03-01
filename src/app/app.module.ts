import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import {MatChipsModule} from '@angular/material/chips';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { SocialProofSectionComponent } from './social-proof-section/social-proof-section.component';
import { PreviewCardComponent } from './preview-card/preview-card.component';
import { HuddleLandingPageComponent } from './huddle-landing-page/huddle-landing-page.component';
import { ClipboardLandingPageComponent } from './clipboard-landing-page/clipboard-landing-page.component';
import { TipCalculatorAppComponent } from './tip-calculator-app/tip-calculator-app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    QrCodeComponent,
    SocialProofSectionComponent,
    PreviewCardComponent,
    HuddleLandingPageComponent,
    ClipboardLandingPageComponent,
    TipCalculatorAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
