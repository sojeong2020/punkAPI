import { Component, OnInit, Input } from '@angular/core';
import { Production } from '../model/production';

@Component({
  selector: 'app-production-more',
  templateUrl: './production-more.component.html',
  styleUrls: ['./production-more.component.css']
})
export class ProductionMoreComponent implements OnInit {

  @Input() beer!:Production;

  constructor() { }

  ngOnInit(): void {
  }

}
