import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl,Validators} from '@angular/forms'
import { CackeService } from '../service/cacke.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  messageText=""
  messageClass=""
  regForm=new FormGroup({
    "username":new FormControl(),
    "email":new FormControl(),
    "password":new FormControl()
  })
  constructor(private service:CackeService,private router:Router) { }

  ngOnInit(): void {
  }

  createAccount(){
    if(this.regForm.valid){
      let formData=this.regForm.value;
      this.service.signUp(formData).subscribe(res=>this.router.navigateByUrl(""));
      

    }
    else{
      this.messageText="invalid data"
      this.messageClass="text-danger"
    }
    
  }



}
