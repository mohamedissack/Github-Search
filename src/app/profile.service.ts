import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


//  import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;
  private clientid: 'Iv1.8cef7b2971eb1203';
  private clientsecret: ' dafafddced493e02ca653091c39fd43795d994fb';


constructor(private http: HttpClient) {
  console.log('service is now ready');
 }
// tslint:disable-next-line:use-lifecycle-interface
// tslint:disable-next-line:contextual-lifecycle
ngOnInit(): void {
  throw new Error('Method not implemented.');
}

 getProfileInfo(username){
  interface apiUrl {
    login: string;
    avatar_url: string;
    blog: string;
    name: string;
    public_repos: number;
    followers: number;
    following: number;
    }
  return this.http.get<apiUrl>('https://api.github.com/users/' + username + '?client_id=' +
    this.clientid + '&client_secret=' + this.clientsecret);
 }


 // tslint:disable-next-line:typedef
 getProfileRepos(username){
  // tslint:disable-next-line:class-name
  interface apiUrl {
    name: string;
    html_url: string;
    description: string;
    created_at: any;
    }
  return this.http.get<apiUrl>('https://api.github.com/users/' + username + '/repos?client_id=' +
   this.clientid + '&client_secret=' + this.clientsecret);
 }
}

