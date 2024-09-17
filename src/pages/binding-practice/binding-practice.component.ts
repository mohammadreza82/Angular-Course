import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-practice',
  standalone: true,
  imports: [],
  templateUrl: './binding-practice.component.html',
  styleUrl: './binding-practice.component.scss'
})
export class BindingPracticeComponent {
  userName: string = ''
  password: string = ''
  retypePassword: string = ''
  isPasswordsMatch: boolean = false
  public onUserNameInputChange(e: Event) {
    this.userName = (e.target as HTMLInputElement).value;
  }
  public onPasswordInputChange(e: Event) {
    this.password = (<HTMLInputElement>e.target).value;
  }
  public onReTypePasswordInputChange(e: Event) {
    this.retypePassword = (<HTMLInputElement>e.target).value;
    // Simple
    // if (this.password != this.retypePassword) {
    //   this.isPasswordsMatch = false
    // } else {
    //   this.isPasswordsMatch = true
    // }
    // Advance
    this.isPasswordsMatch = this.password !== this.retypePassword ? false : true
  }
}
