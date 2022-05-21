import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  userUpdated : BehaviorSubject<any> = new BehaviorSubject<any>(false)
  provider = new GoogleAuthProvider();
  auth = getAuth()

  init() {
    onAuthStateChanged(this.auth, (user) => {
      this.userUpdated.next(user)
    })
  }

  getUserUpdateListener() : Observable<any> {
    return this.userUpdated.asObservable()
  }

  login() {
    signInWithPopup(this.auth, this.provider)
      .then((result) => {
        this.userUpdated.next({...result})
      })
  }

  logout() {
    this.auth.signOut()
  }
}
