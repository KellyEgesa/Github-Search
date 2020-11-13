import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User;

  constructor(public http: HttpClient) {
    this.user = new User(0, '', '', '', '', 0, 0, 0, new Date());
  }

  getGithubUser() {
    interface ApiResponse {
      id: number;
      login: string;
      avatar_url: string;
      repos_url: string;
      public_repos: number;
      followers: number;
      following: number;
      created_at: Date;

      bio: string;
    }
    const promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          environment.apiUrl +
            'users/KellyEgesa?access_token=' +
            environment.authToken
        )
        .toPromise()
        .then(
          (response) => {
            this.user.id = response.id;
            this.user.name = response.login;
            this.user.bio = response.bio;
            this.user.photo = response.avatar_url;
            this.user.repos = response.repos_url;
            this.user.following = response.following;
            this.user.followers = response.followers;
            this.user.reposNumber = response.public_repos;
            this.user.dateCreated = response.created_at;

            resolve();
          },
          (err) => {
            // this.user = 'error';
            reject(err);
          }
        );
    });
    return promise;
  }
}
