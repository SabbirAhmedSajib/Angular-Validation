import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-servicetesting',
  templateUrl: './servicetesting.component.html',
  styleUrls: ['./servicetesting.component.css']
})
export class ServicetestingComponent implements OnInit {


  value: any='';
  value1: any='';
  value2: any='';
  constructor(private api : ApiService) { }

  ngOnInit(): void {
  }

 callingInteger(){
   this.api.Service1()
   .subscribe(res=>{
     this.value=res;
     console.log(this.value);
    //  alert("Data found successfully");
   },err=>{
      alert("Data Not Found!")
   })
 }

 callingString(){
  this.api.Service2()
  .subscribe(res=>{
    this.value1=res;
    // alert("Data found successfully");
  },err=>{
     alert("Data Not Found!")
  })
}

callingArray(){
  this.api.Service3()
  .subscribe(res=>{
    this.value2=res;
    // alert("Data found successfully");
  },err=>{
     alert("Data Not Found!")
  })
}


}
