import {Component} from '@angular/core';

/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'grid-list',
  templateUrl: 'grid-list.component.html',
  styleUrls: ['grid-list.component.css'],
})
export class GridListComponent {
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
