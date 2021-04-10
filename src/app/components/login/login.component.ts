import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: FormGroup;

  @ViewChild('f') loginFormDirective;

  //form object with username and password
  formErrors = {
    'username': '',
    'password': ''
  };
//validation message to handle wrong input 
  validationMessages = {
    'username': {
      'required': 'username is required.',
      'username': 'username not in valid format.'
    },
    'password': {
      'required': 'password is required.'
    }
  };
//inject the services to use its functions
  constructor(private router: Router, private authService: AuthService, private form: FormBuilder) {
    this.createForm();
    //logout to remove the stored data in localstorage
    this.authService.logout();
  }
//creat the form by decalaring it with form builder
  createForm() {
    this.model = this.form.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.model.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now

  }
  //here i handle the order of validation messages 
  onValueChanged(data?: any) {
    if (!this.model) { return; }
    const form = this.model;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  ngOnInit() {}
//when user try to login must verfiy from the auth service is he autherized
  login() {
    this.authService.login(this.model.value.username, this.model.value.password);
  }
}
