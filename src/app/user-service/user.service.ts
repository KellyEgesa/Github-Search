import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user;

  constructor(public http: HttpClient) {}

  getGithubUser() {
    interface ApiResponse {
      id: number;
      login: string;
      avatar_url: string;
      repos_url: string;
      followers: number;
      following: number;
      created_at: Date;
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
            this.user = new User(
              response.id,
              response.login,
              response.avatar_url,
              response.repos_url,
              response.followers,
              response.following,
              response.created_at
            );

            console.log(this.user);
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
