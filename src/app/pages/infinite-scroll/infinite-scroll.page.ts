import { Component, OnInit, ViewChild } from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  
  @ViewChild(IonInfiniteScroll) InfiniteScroll: IonInfiniteScroll;

  data: any[] = Array(20);
  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    setTimeout(() => {

      if(this.data.length > 50) {
        event.target.complete();
        this.InfiniteScroll.disabled = true;
        return;
      }
      console.log('Done');
      const newArr = Array(20);
      this.data.push(...newArr);

      event.target.complete();
    
    }, 1000);
  }

}
