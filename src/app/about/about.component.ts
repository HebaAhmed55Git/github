import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    // html
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

// ts
export class AboutComponent {

}
