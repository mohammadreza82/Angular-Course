import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-star',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss'
})
export class StarComponent implements OnInit {

  // az star be inputOutput be vasile @input() ersal kardam
  // () => yani hamun lahze ejra beshe
  @Input('starRating') rating: number = 4.5
  // EventEmitter in gabeliat ru mide ke betunim az tarigesh enteshar bedim event ha ru
  @Output('starEventEmmiter') starClicked = new EventEmitter<number>()

  width: number = 90
  faStar = faStar;

  public onClick() {
    this.starClicked.emit(this.rating)
  }
  ngOnInit(): void {
    this.width = this.rating * 90 / 5
  }
}
