import { Component, ViewChild } from '@angular/core';
import {lorem} from 'faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText=lorem.sentence();
  success=false;
  enterText='';
  @ViewChild('name') inputName: any;
  getRandomText()
  {
    this.randomText=lorem.sentence();
    this.success=false;
    this.inputName.nativeElement.value = '';
    this.enterText='';
  }
  compare(randomLetter:string,enterLetter:string)
  {
    if(!enterLetter)
    {
      return "text-black";
    }
    return randomLetter===enterLetter?"text-success":"text-danger";
  }
  onInput(value:string)
  {
    this.enterText=value;
    if(value.trim()===this.randomText)
    {
      this.success=true;
    }
    else{
      this.success=false;
    }
  }
}
