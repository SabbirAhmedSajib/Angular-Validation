import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { UserInfoModel } from './user-info.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  submitted = false;

  formValue !: FormGroup;

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
        Validators.minLength(11),
        Validators.maxLength(14),
        Validators.pattern(/^(?:(?:\+|00)88|01)?\d{11}$/)
      ],],
      gender:['' ,Validators.required],
      address:['', Validators.required]
    })

    /*
    this.formValue = this.formBuilder.group({
      userId:[''],
      name:[''],
      userDOB:[''],
      email:[''],
      phoneNumber:[''],
      gender:[''],
      address:['']
    })
    */
    this.getAllUsers();
  }

   clickAddUser(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
   }
  CreateUserDetails(){
    this.UserModelObj.userId= this.formValue.value.userId;
    this.UserModelObj.name= this.formValue.value.name;
    this.UserModelObj.email= this.formValue.value.email;
    this.UserModelObj.address= this.formValue.value.address;
    this.UserModelObj.phoneNumber= this.formValue.value.phoneNumber;
    this.UserModelObj.userDOB= this.formValue.value.userDOB;
    this.UserModelObj.gender= this.formValue.value.gender;

    this.api.CreateUserInfo(this.UserModelObj)
      .subscribe(res=>{
        console.log(res);
        alert("Add Successfully");
        let ref=document.getElementById("cancel")
        ref?.click();
        this.formValue.reset();
        this.getAllUsers();
      },
        err=>{
        alert("Something went wrong.")
        })
  }

  getAllUsers(){
    this.api.getUserInfo()
      .subscribe(res=>{
        this.employeedata=res;
      })
    }

   
    onEdit(row:any){
      this.showAdd=false;
      this.showUpdate=true;
      this.UserModelObj.userId=row.userId;
      this.formValue.controls['name'].setValue(row.name);
      this.formValue.controls['email'].setValue(row.email);
      this.formValue.controls['address'].setValue(row.address);
      this.formValue.controls['phoneNumber'].setValue(row.phoneNumber);
      this.formValue.controls['userDOB'].setValue(row.userDOB);
      this.formValue.controls['gender'].setValue(row.gender);
    }


  updateUserInfo(){
   
    this.UserModelObj.name= this.formValue.value.name;
    this.UserModelObj.email= this.formValue.value.email;
    this.UserModelObj.address= this.formValue.value.address;
    this.UserModelObj.phoneNumber= this.formValue.value.phoneNumber;
    this.UserModelObj.userDOB= this.formValue.value.userDOB;
    this.UserModelObj.gender= this.formValue.value.gender;

    this.api.updateUserInfos(this.UserModelObj,this.UserModelObj.userId)
      .subscribe(res=>{
        alert("Update Successfully")
        let ref=document.getElementById("cancel")
        ref?.click();
        this.formValue.reset();
        this.getAllUsers();
      },
        err=>{
          alert("Something wrong");
        })
  }


  deleteUser(row :any){

    try{
    this.api.deletedUserInfo(row.userId)
      .subscribe(res=>{
        alert("User Info Delete Seccessfully!");
        this.getAllUsers();
      })
    }
    catch(e){
           alert(e)
    }
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
