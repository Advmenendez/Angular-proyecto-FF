import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss']
})
export class SonComponent implements OnInit {
  @Input() public messageSon!: string;
  @Output() public emitMessage = new EventEmitter<string>();
  
  public message: string = '';
  
  

  constructor() { }

  ngOnInit(): void {}
  public sendMessage() {
    this.emitMessage.emit(this.message);
  }

}
