import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { map } from 'rxjs/operators';
import { BlogPost } from './blog-post'

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  loadedBlogPost: BlogPost[] = []
  // responseData: Object;
  // loadedBlogPosts



  constructor(private http: HttpClient) { }


  getAllBlogPosts() {
    return this.http.get<BlogPost>('https://blog.uvphotons.com/ghost/api/v3/content/posts?key=' + environment.BLOGKEY)
      .pipe(map(responseData => {
        // console.log(responseData)
        return responseData;
      }))
  }

  getAllBlogPostsShort() {
    return this.http.get<BlogPost>('https://blog.uvphotons.com/ghost/api/v3/content/posts?key=' + environment.BLOGKEY + '&fields=title,url,feature_image,meta_description, meta_title, excerpt, created_at, reading_time, id, slug, author&include=authors,tags')
      .pipe(map(responseData => {
        // console.log(responseData)
        return responseData;
      }))
  }

  getSingleBlogPost(slug:any) {
    return this.http.get<BlogPost>('https://blog.uvphotons.com/ghost/api/v3/content/posts/slug/' + slug + '?key='+ environment.BLOGKEY + '&include=authors,tags')
      .pipe(map(responseData => {
        // console.log(responseData)
        return responseData;
      }))
  }

  getLimitBlogPosts() {
    return this.http.get<BlogPost>('https://blog.uvphotons.com/ghost/api/v3/content/posts?key=' + environment.BLOGKEY + '&fields=title,id,slug,url,feature_image,created_at,meta_description&include=authors,tags&limit=3')
      .pipe(map(responseData => {
        // console.log(responseData)
        return responseData;
      }))
  }

  getHomeBlogPosts() {
    return this.http.get<BlogPost>('https://blog.uvphotons.com/ghost/api/v3/content/posts?key=' + environment.BLOGKEY + '&fields=title,id,slug,url,feature_image,created_at,meta_description&include=authors,tags&limit=5')
      .pipe(map(responseData => {
        // console.log(responseData)
        return responseData;
      }))
  }


}
