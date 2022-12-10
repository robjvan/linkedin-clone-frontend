import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  
  onSignOut(): void {
    console.log(1, `onSignOut() called`)
  }

}
