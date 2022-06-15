import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ServicetestingComponent } from './servicetesting/servicetesting.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserinfovalidationComponent } from './userinfovalidation/userinfovalidation.component'

@NgModule({
  declarations: [
    AppComponent,
    ServicetestingComponent,
    UserInfoComponent,
    UserinfovalidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
