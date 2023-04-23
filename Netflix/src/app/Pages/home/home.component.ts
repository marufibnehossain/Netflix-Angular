import { Component } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service:MovieApiServiceService){}

  bannerResult:any=[];

  ngOnInit(): void{
    this.bannerData();
  }

  // bannerdata
  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }
}
