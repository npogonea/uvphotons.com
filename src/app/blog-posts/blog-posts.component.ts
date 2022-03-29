import { Component, OnInit } from '@angular/core';
import { BlogPost } from './blog-post';
import { BlogPostService } from './blog-post.service';
import { formatDate } from "@angular/common";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';



@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {

  blogpost: BlogPost[] = []
  blogPostShort: BlogPost | undefined

  isSelectedItem = []
  isSelected: boolean = false
  // loadedBlogPosts

  isLoaded: boolean = false

  responseData: Object ={};

  constructor(
    private blogpostService: BlogPostService,
    private http: HttpClient) { }


  ngOnInit(): void {
    this.getBlogPostsShort()
  }

  getBlogPostsShort() {
    this.blogpostService.getAllBlogPostsShort().subscribe((response) => {
      this.blogPostShort = response;
      this.isLoaded = true;
      // console.log(this.blogPostShort)
    });
  }

  // fetchBlogPosts() {
  //   const options = {
  //     headers: new HttpHeaders({
  //       'Apikey': '712f2c6364354ec8ec7f7dce82',
  //     }),
  //   };
  //   console.log('fetching services...')
  //   this.http
  //     .get("https://blog.uvphotons.com/ghost/api/v3/content/", options)
  //     .subscribe(responseData => {
  //       this.responseData = responseData
  //       console.log(this.responseData)
  //     })
  // }



}
