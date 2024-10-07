import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss'],
})
export class FeedbackFormComponent {
  rating = 0;
  hoverRating = 0;
  stars = [1, 2, 3, 4, 5];

  categories: string[] = [
    'Professionalism',
    'Driving',
    'Pickup',
    'Comfort',
    'Hygiene',
    'Cleanliness',
    'Customer Experience',
    'Other',
  ];

  selectedCategories: string[] = [];
  feedback = '';
  starDescriptions = ['Poor', 'Fair', 'Average', 'Good', 'Excellent'];

  tooltipPosition: { top: string; left: string } = { top: '0px', left: '0px' };

  constructor(private router: Router) { }

  /**
   * Updates the feedback content with a maximum length of 1000 characters.
   * @param value The new value for the feedback textarea.
   */

  updateFeedback(value: string) {
    if (value.length <= 1000) {
      this.feedback = value;
    }
  }

  /**
  * Sets the rating when a star is clicked.
  * If the clicked star is already selected, it resets the rating to 0.
  * @param star The star number that is clicked.
  */

  rate(star: number) {
    if (this.rating === star) {
      this.rating = 0; // Reset rating to 0 if clicked again
    } else {
      this.rating = star;
    }
  }

  /**
   * Sets hover rating and updates tooltip position based on the hovered star.
   * @param star The star number being hovered over.
   */

  hoverStar(star: number) {
    this.hoverRating = star;

    const starElements = document.querySelectorAll('.star');
    const starElement = starElements[star - 1] as HTMLElement;

    if (starElement) {
      const rect = starElement.getBoundingClientRect();
      this.tooltipPosition = {
        top: rect.top - 30 + 'px',
        left: rect.left + rect.width / 2 + 'px',
      };
    }
  }

  /**
  * Resets the hover effect when the mouse leaves the stars.
  */
  resetHover() {
    this.hoverRating = 0;
  }

  /**
   * Toggles the category checkboxes.
   * Adds or removes categories from the selected list.
   * @param category The category to be toggled.
   */

  toggleCategory(category: string) {
    const index = this.selectedCategories.indexOf(category);
    if (index > -1) {
      this.selectedCategories.splice(index, 1);
    } else {
      this.selectedCategories.push(category);
    }
  }

  /**
   * Submits the feedback if a rating is provided.
   * Navigates to the thank you page and logs feedback data.
   */
  submitFeedback() {
    if (this.rating > 0) {
      const feedbackData = {
        rating: this.rating,
        categories: this.selectedCategories,
        feedback: this.feedback,
      };
      this.router.navigate(['/thank-you'])
      console.log('Submitted Feedback:', feedbackData);
    } else {
      console.error('Please provide a rating before submitting feedback.');
    }
  }
}
