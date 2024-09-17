import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attribute-binding.component.html',
  styleUrl: './attribute-binding.component.scss'
})
export class AttributeBindingComponent implements OnInit {
  // live cycle
  isCorrect: boolean = false
  styles = {}

  isModified: boolean = true
  isCancelled: boolean = true
  classes = {}


  users: string[] = ['Mmd', 'Amir', 'Mobin']
  // user: Array<string> = ['Mmd', 'Amir', 'Mobin']
  usersObject: any = [
    {
      id: 1,
      name: 'Mmd',
    },
    {
      id: 2,
      name: 'Amir',
    },
    {
      id: 3,
      name: 'Mobin',
    },
  ]


  ngOnInit(): void {
    this.styles = {
      'font-size': this.isCorrect ? '3rem' : '8rem',
      'color': 'red'
    }
    this.classes = {
      'small-font-size': this.isModified,
      'bg-attribute': this.isCancelled
    }
  }
}
