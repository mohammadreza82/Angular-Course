import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BindingComponent } from "../components/binding/binding.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'practice-project';
}
