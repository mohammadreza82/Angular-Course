import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Switchcase1Component } from "../../components/switchcase1/switchcase1.component";
import { Switchcase2Component } from "../../components/switchcase2/switchcase2.component";
import { Switchcase4Component } from "../../components/switchcase4/switchcase4.component";
import { Switchcase3Component } from "../../components/switchcase3/switchcase3.component";

@Component({
  selector: 'app-attribute-binding',
  standalone: true,
  imports: [CommonModule, Switchcase1Component, Switchcase2Component, Switchcase4Component, Switchcase3Component],
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
 
// use effect harchi benevisim to in ijad khahad shod ghabl az tamam dasturati ke tuye componentemoon hast == constrocor
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
  public addNewUse() {
    return this.usersObject= [
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
        name: 'Mobin 77',
      },
      {
        id: 4,
        name: 'Mobin',
      },
      {
        id: 5,
        name: 'Behzad',
      },
      {
        id: 6,
        name: 'Ali',
      },
    ]
  }

  // mane generate ezafi mishe
  // komak be performance barname
  // 2 ta argument dare = 1-index 2-element
  public trackByFunc(index: number, el: any) {
    // id unik hastesh 
    return el.id
  }

  // ng Switch
  switchProperty:string='d'
}
