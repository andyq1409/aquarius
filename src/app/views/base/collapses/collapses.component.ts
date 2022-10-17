import { Component } from '@angular/core';

@Component({
  selector: 'app-collapses',
  templateUrl: './collapses.component.html',
  styleUrls: ['./collapses.component.css']
})
export class CollapsesComponent {

  collapses = [false, false, false, false];

  constructor() { }

  toggleCollapse(id: number): void {
    // @ts-ignore
    this.collapses[id] = !this.collapses[id];
  }

}
