import {DataEntryType} from "./data-entry-types.enum";

export class DataEntry<T> {
  public id:number = 0;
  public label:string = '';
  public value:T|undefined;
  public type:DataEntryType = DataEntryType.TEXT;
  public required: boolean = false;
  public maxValue?: number;
  public minValue?: number;
  public email?: boolean;
  public options?: string[];
  public blacklist?: T;
  public slaves?: {option: string, field: number, slaveOptions: string[]}[];


  constructor(partial: Partial<DataEntry<T>>) {
    Object.assign(this, partial);
  }
}
