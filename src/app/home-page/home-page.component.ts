import { Component, OnInit } from '@angular/core';
import { InstagramDataService } from '../instagram-data-service/instagram-data.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private igService: InstagramDataService) {}

  ngOnInit() {
    //Get Ig Account Details:
    this.igService.getIGAccDetails();
    // this.igService.getIGAccDetails().subscribe((response) => {
    //   this.igBussinessAccID = response;
    //   console.log(this.igBussinessAccID);
    // });
  }
}
