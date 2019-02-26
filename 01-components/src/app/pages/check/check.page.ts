import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  public data = [
    { color: 'primary', val: 'Pepperoni', isChecked: true },
    { color: 'secondary', val: 'Sausage', isChecked: false },
    { color: 'success', val: 'Mushroom', isChecked: false },
    { color: 'tertiary', val: 'Pie', isChecked: false }
  ];

  constructor() { }

  ngOnInit() {
  }

  selected(item){
    console.log("Item selected: " + JSON.stringify(item));

  }

}
