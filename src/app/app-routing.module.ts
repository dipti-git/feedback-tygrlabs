import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackHomeComponent } from './components/feedback-home/feedback-home.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { RideDetailsComponent } from './components/ride-details/ride-details.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

const routes: Routes = [
  {
    path:'', 
    component: FeedbackHomeComponent,
  },

  {
    path: 'thank-you',
    component: ThankYouComponent
  },

  // {
  //   path: '**',
  //   redirectTo: ''
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
