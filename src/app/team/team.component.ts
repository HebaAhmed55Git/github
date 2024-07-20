import { Component } from "@angular/core";
import { ContactsComponent } from "../contacts/contacts.component";
import { FormsModule } from "@angular/forms";


// decorator ==> meta data
@Component({

  selector : "app-team" ,
  standalone : true,
  imports: [ContactsComponent , FormsModule],
  templateUrl :"./team.component.html",
  styleUrl :'./team.component.css'

})


export class TeamComponent
{

  userWord : string = ""

  userName : string = "ali";

  imgPath : string = "assets/images/1.jpg"

  isAdmin : boolean = false;

  chooseColor : string = 'tomato'

  test()
  {
    alert("Hiiii")
  }

  demo()
  {
    console.log("Hiiii")
  }



}
