import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostsService} from '../../services/posts.service';
import {Router} from '@angular/router';
import {Post} from '../../models/Post.model';
import * as firebase from 'firebase';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private postsService: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      poster: ['']
    });
  }

  onSavePost() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    // const poster = firebase.auth().currentUser.email;
    const newPost = new Post(title, content, firebase.auth().currentUser.email);
    this.postsService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
