import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  name: string;
  user = {
    email: '',
    password: ''
  }

  constructor() {
    this.name = '';
   }

  ngOnInit() {
  }

  onSubmitTemplate(){
    console.log("Form submitted");
    console.log("User data", this.user);
  }

}
