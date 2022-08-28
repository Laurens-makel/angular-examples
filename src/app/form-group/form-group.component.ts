import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DataEntry} from "../model/data-entry";
import {DataControlService} from "../services/data-control.service";

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent {

  constructor(private dataControl: DataControlService) { }

  form = new FormGroup({});

  @Input() set data(data: DataEntry<any>[] | null) {
    if(data != null){
      this.form = this.dataControl.toFormGroup(data);
      this._data = data;
    }
  }
  _data: DataEntry<any>[] = []

  getField(entry: DataEntry<any>) : FormControl {
    return this.form.get(entry.id+"") as FormControl
  }
}
