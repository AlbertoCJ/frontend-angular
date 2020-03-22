import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buttons-panel-normal',
  templateUrl: './buttons-panel-normal.component.html',
  styleUrls: ['./buttons-panel-normal.component.css']
})
export class ButtonsPanelNormalComponent implements OnInit {

  @Input() marginTop = false;
  @Input() showStart = false;
  @Input() showEnd = true;

  constructor() { }

  ngOnInit() {
  }

}
