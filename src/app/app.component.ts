import { Component } from '@angular/core';
import {createEvent, download} from './event-download.utils'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  events = [{
    start: new Date(),
    end: new Date(),
    summary: 'Ein Termin vorhanden',
    description: 'Da geht es um diesen Sachverhalt\n und auch um diesen hier...',
    location: 'Berlin Mitte',
    url: 'https://www.mydomain.de'
  },
  {
    start: new Date(),
    end: new Date('2020-01-01'),
    summary: '2ter Termin vorhanden',
    description: 'Der ist länger... und es geht es um diesen Sachverhalt\n und auch um diesen hier...',
    location: 'Berlin Prenzlauer Berg',
    url: 'https://www.yourdomain.de'
  }]
  content = createEvent(this.events)

  download() {
    download('Termin.ics', this.content)
  }
}