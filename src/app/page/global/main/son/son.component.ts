import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss']
})
export class SonComponent implements OnInit {
  @Input() public messageSon!: string;
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
