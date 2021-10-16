import { Component,Input, OnInit } from '@angular/core';
import { Main } from '../models/ff-model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() public main!: Main;

  constructor() { }

  ngOnInit(): void {}
  public onClickButton(): void {
    if (this.main.button == '¡Enfadar al chocobo!') {
      this.main.button = '¡Calmarlo!';
    } else if (this.main.button == '¡Calmarlo!') {
      this.main.button = '¡Enfadar al chocobo!';
    }
  }

}
