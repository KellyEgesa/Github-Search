import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.css'],
})
export class DisplayProfileComponent implements OnInit {
  user;
  constructor(private userservice: UserService) {}

  ngOnInit(): void {
    this.userservice.getGithubUser();
    this.user = this.userservice.user;
  }
}
