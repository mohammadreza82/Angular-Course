import { Component } from '@angular/core';
import { StarComponent } from '../../components/star/star.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [StarComponent, CommonModule],
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent {
  ratings: number[] = [5, 4.5, 3.5, 1, 3];
  public onStarClicked(rating:number) {
    console.log(`The rating ${rating} is clicked`);
  }
}