import {Component, Input, OnInit} from '@angular/core';
import {DataEntry} from "../model/data-entry";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-group-field',
  templateUrl: './form-group-field.component.html',
  styleUrls: ['./form-group-field.component.scss']
})
export class FormGroupFieldComponent implements OnInit {
  @Input() entry!: DataEntry<any>;
  @Input() form!: FormGroup;
  @Input() field!: FormControl;

  get isValid() { return this.form.controls[this.entry.id].valid; }

  constructor() { }

  ngOnInit(): void {

  }

}
