
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Production } from '../model/production';
import { DataService } from '../data.service';


@Component({
  selector: 'app-production-detail',
  templateUrl: './production-detail.component.html',
  styleUrls: ['./production-detail.component.css']
})
export class ProductionDetailComponent implements OnInit {

  beer: Production | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.getBeer()
  }

  getBeer(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
        // The Number() method converts a value to a number.

        // Getting current component's id 

        // The paramMap supports retrieving a single value with get()

     this.dataService.getBeers()
      .subscribe(beers => {
      const beer = beers.find(b => b.id === id) 
      // The find() method returns the first element in the provided array 
      //that satisfies the provided testing function.

       console.log(beer,"beer")
       this.beer = beer;
    }
    );
  }



}
