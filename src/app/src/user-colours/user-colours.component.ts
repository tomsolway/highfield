import { Component, OnInit } from '@angular/core';
import { DTOTopColours } from 'src/app/interfaces/highfield.models';
import { ApiResults } from 'src/app/resulting-data/results';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-user-colours',
  templateUrl: './user-colours.component.html',
  styleUrls: ['./user-colours.component.scss']
})
export class UserColoursComponent implements OnInit {
  userData$ = this.apiService.getData();

  data = ApiResults;

  colours: DTOTopColours[] = [];


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getColours();
  }

  getColours() {
   this.data.forEach(x => {
     if (this.colours.length > 0 && this.colours.find(y => y.colour === x.favouriteColour)) {
        const test = this.colours.findIndex(y => y.colour === x.favouriteColour);
        this.colours[test].count += 1;
     } else {
       this.colours.push({colour: x.favouriteColour, count: 1});
     }
   });

   this.colours.sort((a, b) => {
    if (a.count === b.count) {
      return a.colour > b.colour ? 1 : -1;
    }
    return a.count > b.count ? -1 : 1;
   });
  }
}
