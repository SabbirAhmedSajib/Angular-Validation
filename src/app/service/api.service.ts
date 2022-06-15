import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BASE_URL } from '../App.url_constant';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  constructor(private http : HttpClient) { }


  Service1(){
    return this.http.get(BASE_URL+'/Integer');   
  }

  Service2(){
    return this.http.get(BASE_URL+'/Text', {responseType: 'text'});   
  }

  Service3(){
    return this.http.get(BASE_URL+'/Array');   
  }


  CreateUserInfo(data:any){
    return this.http.post<any>(BASE_URL+'/Create', data)
      .pipe(map((res:any)=> {
        return res;
      }))

  }

  getUserInfo(){
    return this.http.get<any>(BASE_URL+'/GetInfos')
      .pipe(map((res:any)=> {
        return res;
      }))

  }

  updateUserInfos(data:any,id : number){
    return this.http.put<any>(BASE_URL+'/'+id,data)
      .pipe(map((res:any)=> {
        return res;
      }))

  }

  deletedUserInfo(id : number){
    return this.http.delete<any>(BASE_URL+'/'+id)
      .pipe(map((res:any)=> {
        return res;
      }))

  }


  procedure(data:any){
    return this.http.post<any>(BASE_URL+'/userSetup', data)
      .pipe(map((res:any)=> {
        return res;
      }))

  }
}
