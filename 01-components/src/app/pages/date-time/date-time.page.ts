import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  birthDate: Date = new Date();
  customPickerOptions;
  customDate;

  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (event) => {
          console.log('Clicked Save!')
          console.log(event);
          
        } 
      }, {
        text: 'Log',
        handler: (e) => {
          console.log('Clicked Log. Do not Dismiss.', e);
          return false;
        }
      }]
    }
  }

  changeBirthDate(e){
    console.log("Ion change", e);
    console.log("Date", new Date(e.detail.value));
  }

}
