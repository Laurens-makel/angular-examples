import { Injectable } from '@angular/core';
import {DataEntry} from "../model/data-entry";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  get() : Observable<DataEntry<any>[]> {
    const data: DataEntry<any>[] = [

      new DataEntry<number>({
        id: 1,
        label: "Phone",
        type: "number",
        required: true,
        value: 6
      }),

      new DataEntry<string>({
        id: 2,
        label: "Email",
        type: "string",
        required: true,
        value: "example@example.com"
      }),

      new DataEntry<string>({
        id: 3,
        label: "Website",
        type: "string",
        required: true,
        value: "",
        blacklist: "google"
      }),

      new DataEntry<string>({
        id: 4,
        label: "Food",
        type: "valuelist",
        required: true,
        value: "",
        options: ["Pizza", "Pasta"]
      })
    ]

    return of(data.sort((a, b) => a.id - b.id));
  }

}
