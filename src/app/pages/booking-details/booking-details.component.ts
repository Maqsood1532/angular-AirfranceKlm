import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';
import { BookingDetail, Query } from 'src/models/booking-details.model';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html'
})
export class BookingDetailsComponent implements OnInit {

  // bookingDetails: Observable<BookingDetail[]>
  bookingDetails: BookingDetail[] = [];

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {

    this.apollo.watchQuery<Query>({
      query: gql`
        query  {
          getBookingDetails {
            bookingCode
            itinerary {
              type
              connections {
                id
                duration
                origin {
                  IATACode
                  name
                  city {
                    IATACode
                    name
                    country {
                      code
                      name
                    }
                  }
                }
              }
            }
          }
        }
      `
    })
      .valueChanges
      .subscribe(({data, loading}) => {
        console.log(data);
        this.bookingDetails = data.bookingDetails;
      })
  }

}
