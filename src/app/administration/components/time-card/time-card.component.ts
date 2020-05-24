import { Component, OnInit, Input } from '@angular/core';
import { Time } from '../../entities/time';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-time-card',
  templateUrl: './time-card.component.html',
  styleUrls: ['./time-card.component.css']
})
export class TimeCardComponent implements OnInit {

  time: Time;
  hoursAndMinutes: string;

  @Input('time') set setTime(time: Time) {
    this.time = time;
    const end = moment(time.end);
    const start = moment(time.start);

    const ms = moment(end, 'DD/MM/YYYY HH:mm:ss').diff(moment(start, 'DD/MM/YYYY HH:mm:ss'));
    const d = moment.duration(ms);
    this.hoursAndMinutes = `${ d.days() }d ${ d.hours() }h ${ d.minutes() }m ${ d.seconds() }s`;

  }

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
