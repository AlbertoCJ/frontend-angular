import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-info-mini',
  templateUrl: './card-info-mini.component.html',
  styleUrls: ['./card-info-mini.component.css']
})
export class CardInfoMiniComponent implements OnInit {

  iconClassText: string;

  @Input() title: string;
  @Input() content: string;
  @Input('icon') set setIcon(value: string) {
    if (value) {
      this.iconClassText = `pi pi-${ value }`;
    }
  }
  @Input() iconPos = 'left'; // 'left' or 'right'
  @Input() backgroundColor = '#007ad9';
  @Input() colorText = 'white';
  @Input() colorIcon = 'white';

  constructor() { }

  ngOnInit() {
  }

}
