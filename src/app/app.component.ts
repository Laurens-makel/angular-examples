import {Component, OnInit} from '@angular/core';

import {DataEntry} from "./model/data-entry";
import {DataService} from "./services/data.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'testing-app';

  data$: Observable<DataEntry<any>[]>;
  constructor(service: DataService) {
    this.data$ = service.get();
  }

  ngOnInit(){

  }

}
