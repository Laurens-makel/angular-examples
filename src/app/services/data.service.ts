import { Injectable } from '@angular/core';
import {DataEntry} from "../model/data-entry";
import {Observable, of} from "rxjs";
import {DataEntryType} from "../model/data-entry-types.enum";

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
        type: DataEntryType.NUMBER,
        required: true,
        value: 6
      }),

      new DataEntry<string>({
        id: 2,
        label: "Email",
        type: DataEntryType.TEXT,
        required: true,
        value: "example@example.com"
      }),

      new DataEntry<string>({
        id: 3,
        label: "Website",
        type: DataEntryType.TEXT,
        required: true,
        value: "",
        blacklist: "google"
      }),

      new DataEntry<string>({
        id: 4,
        label: "Country",
        type: DataEntryType.VALUELIST,
        required: true,
        value: "",
        options: ["Germany","Spain","Italy"],
        slaves: [
          {option: "Germany", field: 5, slaveOptions: ["Bradwurst"]},
          {option: "Spain", field: 5, slaveOptions: ["Tapas"]},
          {option: "Italy", field: 5, slaveOptions: ["Pizza", "Pasta"]}
        ]
      }),


      new DataEntry<string>({
        id: 5,
        label: "Food",
        type: DataEntryType.VALUELIST,
        required: true,
        value: "",
        options: ["Bradwurst","Tapas","Pizza","Pasta"]
      }),

      new DataEntry<number>({
        id: 6,
        label: "Amount of gifts",
        type: DataEntryType.NUMBER,
        required: true,
        value: 2,
        minValue: 1,
        maxValue: 3
      })
    ]




    return of(data.sort((a, b) => a.id - b.id));
  }

}
