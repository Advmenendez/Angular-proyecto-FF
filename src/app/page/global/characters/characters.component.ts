import { Characters } from '../models/ff-model';
import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  @Input() public characters!: Characters[];

  constructor() { }

  ngOnInit(): void {
  }

}
