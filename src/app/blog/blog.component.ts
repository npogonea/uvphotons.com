import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-posts/blog-post';
import { BlogPostService } from '../blog-posts/blog-post.service';
// import { PostComponent } from '../blog-posts/post/post.component';
import { formatDate } from "@angular/common";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogpost: BlogPost[] = []
  blogPostShort: BlogPost | undefined


  isSelectedItem = []
  isSelected: boolean = false
  loadedBlogPosts = 0
  isLoaded: boolean = false
  isLoadedBlogs: boolean = false

  responseData: Object = {};

  constructor(
    private blogpostService: BlogPostService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.getBlogPostsShort()
  }

  getBlogPostsShort() {
    this.blogpostService.getHomeBlogPosts().subscribe((response) => {
      this.blogPostShort = response;
      this.isLoaded = true;
      // console.log(this.blogPostShort)
    });
  }


}
