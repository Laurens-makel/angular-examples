import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataEntry} from "../model/data-entry";
import {FormGroup} from "@angular/forms";
import {DataEntryType} from "../model/data-entry-types.enum";

@Component({
  selector: 'app-form-group-field',
  templateUrl: './form-group-field.component.html',
  styleUrls: ['./form-group-field.component.scss']
})
export class FormGroupFieldComponent implements OnInit {
  @Input() entry!: DataEntry<any>;
  @Input() form!: FormGroup;

  @Output() select = new EventEmitter<DataEntry<any>>();

  DataEntryType = DataEntryType;
  get isValid() { return this.field.valid; }

  get field() { return this.form.controls[this.entry.id] }
  get errors() { return this.field.errors }

  constructor() { }

  ngOnInit(): void {

  }

}
