import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Production } from '../model/production';
import { FormBuilder, Validators } from '@angular/forms';
import { of } from 'rxjs';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  beers:Production[]=[];


  profileForm = this.fb.group({
    title:[''],
    firstname:[''],
    lastname:['', Validators.required],
    termsAccepted:[false]
  })

  constructor(private dataService: DataService,
              private fb: FormBuilder) { }


  ngOnInit(): void {
    this.dataService.getBeers().subscribe( data =>{
      console.log(data,"data from form")
      this.beers = data.sort((a,b)=> a.name.localeCompare(b.name))
    }
  )

  }

  submit(){
    let result = this.profileForm;
    if(this.profileForm.status == 'VALID'){
      console.log(result.value)

    }

  }

 

}
