import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  // instantiate posts to an empty array
  posts: any = [];
  name: string = "hello";
  constructor(private postsService: PostsService) { }

  goToApi() {
    
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
      console.log(this.posts)
    });
    
  }
  ngOnInit() {
    // Retrieve posts from the API
    // this.postsService.getAllPosts().subscribe(posts => {
    //   this.posts = posts;
    // });
  }
}
