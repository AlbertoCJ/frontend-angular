import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-algorithm-details-title',
  templateUrl: './algorithm-details-title.component.html',
  styleUrls: ['./algorithm-details-title.component.css']
})
export class AlgorithmDetailsTitleComponent implements OnInit {

  @Input() title: string;
  @Input() percent: number;

  constructor() { }

  ngOnInit() {
  }

}
