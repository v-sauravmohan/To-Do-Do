import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss']
})
export class AddformComponent implements OnInit {
  addToForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.addToForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {  }

  get validate() { return this.addToForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.addToForm.value);
  }

}
