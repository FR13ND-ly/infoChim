import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../data-access/user.service';
import { Comment } from './data-access/comment.model';
import { CommentsService } from './data-access/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private commentsService : CommentsService, private userService : UserService) { }

  user$ : Observable<any> = this.userService.getUserUpdateListener()
  comments$ : Observable<Array<Comment>> = this.commentsService.getCommentsUpdateListener()

  ngOnInit(): void {
  }
  
  onAddComment(form : NgForm, user : any) {
    let data = {
      userPhoto : user.photoURL,
      username : user.displayName,
      content : form.form.value.text
    }
    this.commentsService.addComment(location.pathname, data)
    form.reset()
  }
}
