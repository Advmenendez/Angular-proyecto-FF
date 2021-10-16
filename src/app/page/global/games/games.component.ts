import { Component,OnInit,Input} from '@angular/core';
import { Games } from '../models/ff-model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  @Input() public games!: Games[];

  constructor() { }

  ngOnInit(): void {
  }

}
