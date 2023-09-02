import { NgIfContext } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit{
  // public firstName =  new FormControl()
  // public lastName =  new FormControl()
  // public email =  new FormControl()
  // public phone =  new FormControl()
  // public message =  new FormControl()
 
  contactForm:FormGroup = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    phone: new FormControl(null),
    message : new FormControl(null),
   })
 
 

  constructor(){}

  ngOnInit(): void {
   
  }   

  onSubmit(){
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
 
  
    
   
    
    
    
  }

}
