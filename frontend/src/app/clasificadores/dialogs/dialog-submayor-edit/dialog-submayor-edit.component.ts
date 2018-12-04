import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Submayor } from '../../models/submayor.interface';

@Component({
  selector: 'app-dialog-submayor-edit',
  templateUrl: './dialog-submayor-edit.component.html',
  styleUrls: ['./dialog-submayor-edit.component.scss']
})
export class DialogSubmayorEditComponent implements OnInit {

  form: FormGroup;
  constructor(
    private dialogRef       : MatDialogRef<DialogSubmayorEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Submayor,
    public formBuilder      : FormBuilder
  ) { }

  ngOnInit() {   
    
    this.createForm();
  }
  createForm()
  {
    this.form = this.formBuilder.group({  
      'id'          : [this.data.id],
      'generico_id' : [this.data.generico_id], 
      'submayor'    : [this.data.submayor],  
      'descripcion' : [this.data.descripcion, Validators.required],      
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
