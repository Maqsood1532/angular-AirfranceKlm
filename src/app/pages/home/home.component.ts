import { Component, OnInit } from '@angular/core';
import { UntypedFormControl,  UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestForm } from 'src/models/form.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  request: RequestForm;
  public form: UntypedFormGroup;

  // emptyUserName = 'You must enter a username';
  // minlengthUserName = 'User name must be at least 3 characters long';
  // maxlengthUserName = 'Username cannot exceed 20 characters';
  // userNamePattern = 'Username should be in alphanumeric only';

  constructor(private router: Router) {
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

      this.router.navigate(["/booking-details"]);

    }
  }

}
