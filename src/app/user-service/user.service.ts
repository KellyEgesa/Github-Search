import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user;

  constructor(public http: HttpClient) {}

  getGithubUser() {
    interface ApiResponse {
      data: any;
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
            console.log(response);
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
