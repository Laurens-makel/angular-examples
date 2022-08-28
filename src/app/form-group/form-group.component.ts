import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DataEntry} from "../model/data-entry";
import {DataControlService} from "../services/data-control.service";

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent {

  constructor(private dataControl: DataControlService, private cdr: ChangeDetectorRef) { }

  form = new FormGroup({});

  @Input() set data(data: DataEntry<any>[] | null) {
    if(data != null){
      this.form = this.dataControl.toFormGroup(data);
      this._data = data;
    }
  }
  _data: DataEntry<any>[] = []

  changeMasterDetail(entry: DataEntry<any>) {
    if(entry.slaves){
      const slaveIndex = entry.slaves.findIndex(slave => slave.option == entry.value);

      if(slaveIndex > -1){
        const slave = entry.slaves[slaveIndex];
        const slaveEntry = this._data.find(e => e.id == slave.field);

        if(slaveEntry !== undefined){
          slaveEntry.options = slave.slaveOptions;
          const slaveField = this.form.get(slaveEntry.id+"");

          if(slaveEntry.options.indexOf(slaveField?.value) == -1){
            slaveEntry.value = "";
            this.cdr.detectChanges();
          }
        }
      }
    }
  }
}
