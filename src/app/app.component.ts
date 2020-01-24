import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from "../user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent implements OnInit, OnDestroy {  
  currentDateTime:any;
  userForm:FormGroup;
  countries = [];
  states = [];
  user: User = {
    firstName: '',
    lastName: '',
    address: '',
    country: undefined,
    state: undefined,
    zipcode: undefined,
  };
 
  constructor(private formBuilder: FormBuilder) { 
    this.userForm = this.formBuilder.group({
      'firstName': [this.user.firstName, [Validators.required]],
      'lastName': [this.user.lastName, [Validators.required]],
      'address': [this.user.address, [Validators.maxLength(45)]],
      'country': [this.user.country, [Validators.required]],
      'state': [this.user.state, [Validators.required]],
      'zipcode': [this.user.zipcode, [Validators.required]],
    });
  }
  
  ngOnInit() {    
    this.countries = ["India","Srilanka"];
    this.currentDateTime = new Date().toLocaleString();
  }

  ngOnDestroy() { 
     
  }

  fillState(ctryValue) {
    switch(ctryValue){
      case "India":
        this.states = ["Tamil Nadu","Kerala","Karnataka","Andhra Pradesh"]
        break;
      case "Srilanka":
        this.states = ["Western Province","Central Province","South Province"]
        break;
        default:
          this.states=[];
          break;
    }
  }

  saveUser() { 
    alert("Registered successfully!!!");
    this.userForm.reset();
  }
}