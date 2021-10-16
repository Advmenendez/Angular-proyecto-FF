import { Component, Input, OnInit } from '@angular/core';
import { Main } from '../models/ff-model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() public main!: Main;
  public messageFather: string = '';
  public messageSon: string = '';

  constructor() {}

  public ngOnInit(): void {}
  public onKeyUp(letter: string): void {
    this.messageFather = letter;
  }
  public onClickButton(): void {
    if (this.main.button == '¡Enfadar al chocobo!') {
      this.main.button = '¡Calmarlo!';
    } else if (this.main.button == '¡Calmarlo!') {
      this.main.button = '¡Enfadar al chocobo!';
    }
  }
  public setMessage(event: string) {
    this.messageSon = event;
  }
}
