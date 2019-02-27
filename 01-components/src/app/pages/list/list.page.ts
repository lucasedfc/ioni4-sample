import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  users:Observable<any>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }

}
