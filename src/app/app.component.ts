import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BindingComponent } from "../components/binding/binding.component";
import { InputOutputComponent } from "../pages/input-output/input-output.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BindingComponent, InputOutputComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'practice-project';
  faCoffee = faCoffee;
  faStar = faStar;
}
