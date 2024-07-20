import { NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


interface Product
{
  pName : string ; 
  pPrice : number ;
  pImg : string ;
  pCat : string ;
  pCode: number
}



@Component({

  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.copmponent.html',
  styleUrl: './home.copmponent.css'
})

export class HomeComponent {

  friends : string[] = ["Ahmed" , "Sara" , "ali"]

  role : string = 'ayatya';

}
