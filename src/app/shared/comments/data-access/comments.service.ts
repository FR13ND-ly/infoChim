import { Injectable } from '@angular/core';
import { getDatabase, ref, update, push, onValue, get, remove } from "firebase/database";
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Comment } from './comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor() { }

  commentsUpdated : BehaviorSubject<Array<Comment>> = new BehaviorSubject<Array<Comment>>([])

  db = getDatabase();

  init(id : string) {
    onValue(ref(this.db, `${id}`), (snapshot) => {
      this.commentsUpdated.next(snapshot.val() ? Object.values(snapshot.val()) : [])
    })
  }

  getCommentsUpdateListener() : Observable<Array<Comment>> {
    return this.commentsUpdated.asObservable()
  }

  addComment(id : string, data : any) {
    push(ref(this.db, `${id}`), data)
  }
}
