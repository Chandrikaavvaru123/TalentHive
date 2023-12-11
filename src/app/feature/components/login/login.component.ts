import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user, SharedService } from 'src/app/shared/shared.service';
import { FeatureService } from '../../feature.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  loading: boolean = false;
  submitClicked!: boolean;

  constructor(private formBuilder: FormBuilder, private sharedService: SharedService, private featureService: FeatureService) { }

  ngOnInit() {
    this.initailizeLoginForm();
    this.featureService?.getUsers()?.subscribe((res: any) => {
      console.log("res:", res);

    })
  }

  initailizeLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.submitClicked = true;
    let newUser !: user[];
    if (this.loginForm?.valid){
      newUser = this.loginForm?.value;
      console.log("form values are:", newUser);
      this.featureService?.addNewUser(newUser)?.subscribe((res: any) => {
        console.log("Sucessfull");
      })
    }
    else{
      
    }


  }
}
