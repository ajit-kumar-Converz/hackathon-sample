import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() title: string = 'My Card Title';
  @Input() duration: string = 'string';
  @Input() emissions_rate: string = 'string';
  @Input() data: any = [];
  constructor() {}

  ngOnInit(): void {}
}
