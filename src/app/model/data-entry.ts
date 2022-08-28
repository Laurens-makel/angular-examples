import {DataEntryType} from "./data-entry-types.enum";

export class DataEntry<T> {
  public id:number = 0;
  public label:string = '';
  public value:T|undefined;
  public type:DataEntryType = DataEntryType.TEXT;
  public required: boolean = false;
  public options?: string[];
  public blacklist?: T;

  constructor(partial: Partial<DataEntry<T>>) {
    Object.assign(this, partial);
  }
}
