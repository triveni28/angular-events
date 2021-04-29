import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, FormsModule } from '@angular/forms'

@Component({
  templateUrl:'./profile.component.html'
})
export class ProfileComponent implements OnInit{
profileForm: FormGroup
ngOnInit(){
  let firstName= new FormControl()
  let lastName=new FormControl()
  this.profileForm= new FormGroup({
    firstName: firstName,
    lastName: lastName
  })
}
}
