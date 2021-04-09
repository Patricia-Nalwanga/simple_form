import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Form } from "../shared/form";


@Component({
  selector: "app-form1",
  templateUrl: "./form1.component.html",
  styleUrls: ["./form1.component.css"],
})

export class Form1Component implements OnInit {
  userInput = new FormGroup({
    username: new FormControl("",[Validators.required]),
     email: new FormControl("",[Validators.required, Validators.email]),
    password: new FormControl("",[Validators.required]),
  });

  @ViewChild('fform')userInputDirective;
  //  where fform is a template variable ie #fform.

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.userInput.get('username').value);
      this.userInput.setValue({
         username: '',
         email: '',
         password: ''
     })
       
     this.userInputDirective.resetForm();
  }
  
}


