import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SubArea } from '../../models/subarea.interface';

@Component({
  selector: 'app-dialog-subarea-edit',
  templateUrl: './dialog-subarea-edit.component.html',
  styleUrls: ['./dialog-subarea-edit.component.scss']
})
export class DialogSubareaEditComponent implements OnInit {

  form: FormGroup;
  constructor(
    private dialogRef       : MatDialogRef<DialogSubareaEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SubArea,
    public formBuilder      : FormBuilder
  ) { }

  ngOnInit() {   
    
    this.createForm();
  }
  createForm()
  {
    this.form = this.formBuilder.group({  
      'id'          : [this.data.id],
      'area_id'     : [this.data.area_id], 
      'nombre'      : [this.data.nombre, Validators.required],  
      'responsable' : [this.data.responsable, Validators.required],      
    });
  }
  closeDialog() {		
		this.dialogRef.close();
  }
  submit()
  {
    if(this.form.valid)
    {
      this.dialogRef.close(this.form.value);
    }
    
  }

}
