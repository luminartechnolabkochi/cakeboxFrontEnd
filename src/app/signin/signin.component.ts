import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CackeService } from '../service/cacke.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  logForm=new FormGroup({
    "username":new FormControl(),
    "password":new FormControl()
  })

  constructor(private service:CackeService) { }

  ngOnInit(): void {
  }

  authenticate(){
    if(this.logForm.valid){
      let formData=this.logForm.value
      this.service.getToken(formData).subscribe((res:any)=>{ localStorage.setItem("token","Token "+res.token)})

    }
  }




}
