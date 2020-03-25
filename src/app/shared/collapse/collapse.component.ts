import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit {

  show: boolean;

  @Input() textShowMore: string;
  @Input() textShowLess: string;
  @Input() textToShow: string;

  constructor() {
    this.show = false;
   }

  ngOnInit() {
  }

  showToogle() {
    this.show = !this.show;
  }

}
