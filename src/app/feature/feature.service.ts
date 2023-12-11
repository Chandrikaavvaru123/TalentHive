import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FeatureService {
    private url = 'http://localhost:3000/users'; // Adapt this URL to your server

    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get(this.url);
    }

    addNewUser(user: any) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this.url, user, { headers });
    }
}


