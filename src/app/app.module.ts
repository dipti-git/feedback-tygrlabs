import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { RideDetailsComponent } from './components/ride-details/ride-details.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { CommonModule } from '@angular/common';
import { FeedbackHomeComponent } from './components/feedback-home/feedback-home.component';
import { StopLocationsContainerComponent } from './components/stop-locations-container/stop-locations-container.component';


@NgModule({
  declarations: [
    AppComponent,
    FeedbackFormComponent,
    RideDetailsComponent,
    TopBarComponent,
    ThankYouComponent,
    FeedbackHomeComponent,
    StopLocationsContainerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
