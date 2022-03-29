import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs'
import { BlogPost } from '../blog-post';
import { BlogPostService } from '../blog-post.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Title } from '@angular/platform-browser';

export interface Author {
  id: string,
  name: string,
  slug?: string,
  profile_image: string,
  cover_image: string,
  bio: string,
  meta_description: string,
  url: string,
}

export interface Tags {
  id: string,
  name: string,
  slug?: string,
  description: string,
  feature_image: string,
  visibility: string,
  meta_title: string,
  meta_description: string,
  url: string,

}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class PostComponent implements OnInit {

  location: Location;
  viewContent: any; // definition of this field is used to switch the display

  constructor(private route: ActivatedRoute,
    private blogpostService: BlogPostService,
    private sanitizer: DomSanitizer,
    private titleService: Title,
    location: Location) {
      this.location = location
      this.getID()
      }

  postID!: string| null;
  blog!: BlogPost;
  post!: BlogPost
  isLoaded: boolean = false
  isLoadedBlogs: boolean = false
  author!: Author
  tags!: Tags
  blogPostShort: BlogPost | undefined

  getID() {
    this.route.paramMap.subscribe(params => {
      this.postID = params.get('slug')
      this.getPost(this.postID)
      this.getLimitPosts()
    });
  }

  // changeLocationName(name) {
  //   this.location.go(name)
  // }

  ngOnInit(): void {
    this.titleService.setTitle('UV-C Light Disinfection | UV Germicidal Lamps & Sterilization Light To Kill Germs - UV Photons.');

  }


  getPost(id:any) {
    this.blogpostService.getSingleBlogPost(id).subscribe((response) => {
      this.blog = response;
      this.author = this.blog.posts[0].authors[0];
      this.tags = this.blog.posts[0].tags[0]
      this.isLoaded = true;
      this.titleService.setTitle(this.blog.posts[0].title); // SET TITLE
      this.viewContent = this.sanitizer.bypassSecurityTrustHtml (this.blog.posts[0].html!); // where the content of the form content of this field can be transformed
      // this.changeLocationName(this.blog.posts[0].slug)
      // console.log(this.blog)
    });
  }

  getLimitPosts() {
    this.blogpostService.getLimitBlogPosts().subscribe((response) => {
        this.blogPostShort = response;
        this.isLoadedBlogs = true;
        // console.log(this.blogPostShort)
    });
}

}
