import { Component, Input } from '@angular/core';
import { Booking } from '../../models/booking.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.scss'],
})
export class RideDetailsComponent {
  user: User;
  /** Initializing the user object with default mock value as of now.
   * In real application, user data are to be fetched from an API using a service.
   */

  constructor() {
    this.user = {
      name: 'John Williamson',
      reservationNumber: '11283908480',
      userImage: 'assets/ride-details/passenger-name.png',
    };
  }

  /** Booking object containing details about the ride using mock values as of now.
   * In a real application, booking details are to be retrieved from an API using a service.
   */

  booking: Booking = {
    date: '5 April 2022 • Mon',
    time: '4:30 PM',
    vehicleType: 'SUV',
    passengerCount: 7,
    suitcaseCount: 6,
    chauffeurName: 'Michael Scott',
    chauffeurImage: 'assets/ride-details/chauffer.png',
    vehicleImage: 'assets/ride-details/car.png',
  };
}
