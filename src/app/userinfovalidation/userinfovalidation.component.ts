import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { UserInfoModel } from '../user-info/user-info.model';

@Component({
  selector: 'app-userinfovalidation',
  templateUrl: './userinfovalidation.component.html',
  styleUrls: ['./userinfovalidation.component.css']
})
export class UserinfovalidationComponent implements OnInit {

  formValue !: FormGroup;

  submitted = false;
  
  UserModelObj : UserInfoModel = new UserInfoModel();

  employeedata !: any;

  showAdd !: boolean;
  showUpdate !: boolean;

  constructor(private formBuilder : FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      userId:[''],

      name:['', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[_A-z0-9]*((-|s)*[_A-z0-9])*$')]],

      userDOB:['', Validators.required],

      email:['',[
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')],],

      phoneNumber:['',[
        Validators.required,
        Validators.maxLength(11),
        Validators.pattern('^[0-9]+$')],],
      gender:['' ,Validators.required],
      address:['', Validators.required]
    })
  }


  // Getter method to access formcontrols
  get f() {
    return this.formValue.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.formValue.valid) {
      alert('Please fill all the required fields to create a User Info!');
      return false;
    } else {
      return console.log(this.formValue.value);
    }
  }

}
