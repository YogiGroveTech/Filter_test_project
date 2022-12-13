import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  characters = [
    { name: 'Batman', team: 'Justice League' },
    { name: 'Hulk', team: 'Avengers' },
    { name: 'Flash', team: 'Justice League' },
    { name: 'Iron Man', team: 'Avengers' },
    { name: 'Deadpool', team: 'X-Force' },
  ];

  search(event) {
    if (event.target.value.length > 2) {
      const result = this.characters.filter(
        (character) => character.team === 'Avengers'
      );
    }
  }
}
