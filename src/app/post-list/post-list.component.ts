import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../models/Post.model';
import {Subscription} from 'rxjs';
import {PostsService} from '../services/posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPosts();
  }

  onNewPost() {
    this.router.navigate(['/posts', 'new']);
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }

  onViewPost(id: number) {
    this.router.navigate(['/posts', 'view', id]);
  }

  onLoveIt(post: Post) {
    this.postsService.upLoveValue(post);
  }

  onDontLoveIt(post: Post) {
    this.postsService.downLoveValue(post);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
