export interface BlogPost {
  posts: [{
    id: string,
    uuid?: string,
    title: string,
    slug?: string,
    html?: string | undefined
    comment_id?: string,
    feature_image: string,
    featured: boolean,
    visibility: string,
    published_at: string,
    url: string,
    excerpt: string,
    created_at: string,
    reading_time: number,
    meta_title: string,
    meta_description: string,
    authors: [{
      id: string,
      name: string,
      slug?: string,
      profile_image: string,
      cover_image: string,
      bio: string,
      meta_description: string,
      url: string,
    }],
    tags: [{
      id: string,
      name: string,
      slug?: string,
      description: string,
      feature_image: string,
      visibility: string,
      meta_title: string,
      meta_description: string,
      url: string,
    }]
  }]
}
