import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.css'],
})
export class DisplayProfileComponent implements OnInit {
  constructor(private userservice: UserService) {}

  ngOnInit(): void {
    this.userservice.getGithubUser();
    console.log(this.userservice);
  }
}
