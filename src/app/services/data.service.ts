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
        label: "Food",
        type: DataEntryType.VALUELIST,
        required: true,
        value: "",
        options: ["Pizza", "Pasta"]
      }),

      new DataEntry<number>({
        id: 5,
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
