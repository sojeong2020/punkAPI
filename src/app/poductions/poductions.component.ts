import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Production } from '../model/production';

@Component({
  selector: 'app-poductions',
  templateUrl: './poductions.component.html',
  styleUrls: ['./poductions.component.css']
})
export class PoductionsComponent implements OnInit {

  public beers:Production[]=[];

  /* beer!: Production;

   when you utilize the ! 
  that is like a promise you make that this value will NOT be undefined, 
  */

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getBeers()
    .subscribe(data => this.beers = data)

   /* subscribe() is a method  that connects the observer to observable events. 
   Whenever any change is made in these observable, 
   a code is executed and observes the results or changes using the subscribe method. 
   Subscribe() is a method from the rxjs library,
    */
  }

  /* onClick(beer:Production){
    console.log(beer,"beer!")
    this.beer = beer;
  }  */

}
