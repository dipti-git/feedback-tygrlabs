import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  @Input() showDiv: boolean = true;
  constructor(private router: Router) {}

  navigateToFeedback() {
    this.router.navigate(['/']);
  }
  skipFeedback() {
    this.router.navigate(['/thank-you']);
  }
}
