import { Component, OnInit } from '@angular/core';
import { UntypedFormControl,  UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { RequestForm } from 'src/models/form.model';
import { searchBooking } from 'src/schema/queries/booking-details-queries';
import { Query } from 'src/models/booking-details.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  request: RequestForm;
  public form: UntypedFormGroup;

  constructor(private router: Router,
              private apollo: Apollo) {

    this.initiateForm();
   };

  ngOnInit(): void {
    
  };

  protected initiateForm(): void {
    this.form = new UntypedFormGroup({
      bookingCode: new UntypedFormControl(null, {validators: [Validators.required, 
                                                       Validators.minLength(5), 
                                                       Validators.maxLength(6), 
                                                       Validators.pattern("^[A-Za-z2-9_-]*$")]}),
      familyName: new UntypedFormControl(null, {validators: [Validators.required, Validators.minLength(2), Validators.maxLength(30)]})
    });
  }

  getBookingDetails(): void{

    this.request = new RequestForm();

    if(this.form.valid){ //Process only if form is valid

      //get booking code
      this.request.BookingCode = this.form.controls["bookingCode"].value;

      //get family name
      this.request.FamilyName = this.form.controls["familyName"].value;

      const variables = {bookingCode: this.request.BookingCode, lastName: this.request.FamilyName};

      this.apollo.watchQuery<Query>({
        query: searchBooking,
        variables
      })
        .valueChanges
        .subscribe(({data, loading}) => {
          if(data.seachBooking != null){
             //navigate to booking-details page
            this.router.navigate(["/booking-details"]);
          }
          else{
            alert("Record not found")
            return;
          }
        })

     

    }
  }

}
