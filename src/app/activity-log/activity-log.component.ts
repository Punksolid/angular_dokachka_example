import { Component } from '@angular/core';

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.scss']
})
export class ActivityLogComponent {

  static addActivity(activity: string) {
    console.log(activity);
  }
}
