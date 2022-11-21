import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Utility } from 'src/app/utilities/utility';
import { Address, BookingDetail, BookingRecord, Connections, Itinerary, MarketingFlight, Passenger, Query, Segment } from 'src/models/booking-details.model';
import { getBookingDetails } from 'src/schema/queries/booking-details-queries';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html'
})
export class BookingDetailsComponent implements OnInit {

  // bookingDetails: Observable<BookingDetail[]>
  bookingDetails: BookingDetail[] = [];
  itinerary: Itinerary;
  connections: Connections[] = [];
  origin: Address;
  destination: Address;
  segments: Segment;
  departFrom: Address;
  arriveOn: Address;
  marketingFlight: MarketingFlight;
  passengers: Passenger;
  departureDay: string;
  arrivalDay: string;

  bookingRecord: BookingRecord;
  bookingCode="PZIGZ3";
  lastName="HESP"

  //variables to display on page
  headlineData: string;
  airline: string;


  constructor(private apollo: Apollo) { }

  ngOnInit(): void {

    const variables = {bookingCode: this.bookingCode, lastName: this.lastName};

    this.apollo.watchQuery<any>({
      query: getBookingDetails,
      
    })
      .valueChanges
      .subscribe(({data}) => {
        if(data.getBookingDetails != null){
          this.itinerary = data.getBookingDetails.itinerary;
          this.connections = data.getBookingDetails.itinerary.connections[0];
          this.origin = data.getBookingDetails.itinerary.connections[0].origin;
          this.destination = data.getBookingDetails.itinerary.connections[0].destination;
          this.segments = data.getBookingDetails.itinerary.connections[0].segments[0];
          this.departFrom = data.getBookingDetails.itinerary.connections[0].segments[0].departFrom;
          this.arriveOn = data.getBookingDetails.itinerary.connections[0].segments[0].arriveOn;
          this.marketingFlight = data.getBookingDetails.itinerary.connections[0].segments[0].marketingFlight;
          this.passengers = data.getBookingDetails.passengers;
          console.log(data.getBookingDetails.passengers)

          this.departureDay = Utility.getDayOfWeek(this.marketingFlight.operatingFlight.scheduledDeparture);
          this.arrivalDay = Utility.getDayOfWeek(this.marketingFlight.operatingFlight.scheduledArrival);
          
          this.headlineData = this.departureDay + ", " + Utility.getMonthName(this.marketingFlight.operatingFlight.scheduledDeparture) 
                              + " " + Utility.getDayAndYear(this.marketingFlight.operatingFlight.scheduledDeparture) + " - " 
                              + this.arrivalDay + ", " + Utility.getMonthName(this.marketingFlight.operatingFlight.scheduledArrival) 
                              + " " + Utility.getDayAndYear(this.marketingFlight.operatingFlight.scheduledArrival) + " - "  
                              + this.origin.city.name + " (" + this.origin.city.IATACode + ") to " 
                              + this.destination.city.name + " (" + this.destination.city.IATACode + ") - "
                              + this.marketingFlight.status.name; 

          this.airline = this.segments.marketingFlight.carrier.name + " (" 
                         + this.segments.marketingFlight.carrier.code + ") " 
                         + this.segments.marketingFlight.number;

        }
        else{
          alert("Error finding record");
        }
      })
  }

}
