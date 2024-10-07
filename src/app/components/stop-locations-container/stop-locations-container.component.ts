import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stop-locations-container',
  templateUrl: './stop-locations-container.component.html',
  styleUrls: ['./stop-locations-container.component.scss'],
})
export class StopLocationsContainerComponent {
  locations = [
    {
      type: 'start',
      airport: 'Dallas/Fort Worth International Airport (DFW)',
      address: '2400 Aviation Dr.',
      address2: 'DFW Airport, TX 75261',
      phone: 'Ph: +1 972-973-3112',
    },
    {
      type: 'in-progress',
      airport: 'Dallas/Fort Worth International Airport (DFW)',
      address: '2400 Aviation Dr.',
      address2: 'DFW Airport, TX 75261',
      phone: 'Ph: +1 972-973-3112',
    },
    {
      type: 'end',
      airport: 'Dallas/Fort Worth International Airport (DFW)',
      address: '2400 Aviation Dr.',
      address2: 'DFW Airport, TX 75261',
      phone: 'Ph: +1 972-973-3112',
    },
  ];
}
