import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('list') listUser: IonList; 
  users:Observable<any>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }

  favorite(user: any){
    console.log('favorite', user);
    this.listUser.closeSlidingItems();
  }

  share(user: any){
    console.log('share', user);
    this.listUser.closeSlidingItems();
  }

  delete(user: any){
    console.log('delete', user);
    this.listUser.closeSlidingItems();
  }


}
