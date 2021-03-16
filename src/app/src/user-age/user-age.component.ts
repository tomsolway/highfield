import { Component, OnInit } from '@angular/core';
import { DTOTopColours } from 'src/app/interfaces/highfield.models';
import { ApiResults } from 'src/app/resulting-data/results';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-user-age',
  templateUrl: './user-age.component.html',
  styleUrls: ['./user-age.component.scss']
})
export class UserAgeComponent implements OnInit {
  userData$ = this.apiService.getData();

  data = ApiResults;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  getUserAgePlus20(dob: string) {
    const DateOfBirth = new Date(dob);

    const timeDifference = Math.abs(Date.now() - DateOfBirth.getTime());

    const age = Math.floor((timeDifference / (1000 * 3600 * 24)) / 365.25);

    return age + 20;
  }

}
