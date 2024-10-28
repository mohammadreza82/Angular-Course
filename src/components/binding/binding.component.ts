import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BindingPracticeComponent } from "../../pages/binding-practice/binding-practice.component";
import { AttributeBindingComponent } from "../../pages/attribute-binding/attribute-binding.component";

@Component({
  selector: 'app-binding',
  standalone: true,
  // FormsModule  Two way binding
  imports: [FormsModule, BindingPracticeComponent, AttributeBindingComponent],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss'
})
export class BindingComponent {
  name: string = 'MohammadReza'
  lastName: string = 'Jamshidi'
  city: string = 'Oskou'
  
  isEnable: boolean = false

//  Event Binding
  public onInputChange(e: Event) {
    console.log(e);

    this.lastName =(e.target as HTMLInputElement).value;
    // this.lastName = (<HTMLInputElement>e.target).value;
  }

}
