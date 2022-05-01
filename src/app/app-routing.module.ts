import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MobileUnitComponent } from './mobile-unit/mobile-unit.component';
import { LampsComponent } from './lamps/lamps.component';
import { BgImgLampsComponent } from './bg-img-lamps/bg-img-lamps.component';
import { X35wLampComponent } from './x35w-lamp/x35w-lamp.component';
import { Xl36wLampComponent } from './xl36w-lamp/xl36w-lamp.component';
import { Xxl55wLampComponent } from './xxl55w-lamp/xxl55w-lamp.component';
import { Xl70wLampComponent } from './xl70w-lamp/xl70w-lamp.component';
import { C110wLampComponent } from './c110w-lamp/c110w-lamp.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { PostComponent } from './blog-posts/post/post.component'
import { VxoneAirComponent } from './vxone-air/vxone-air.component';
import { VxoneSComponent } from './vxone-s/vxone-s.component';
import { AirlightAndroidComponent } from './airlight-app/airlight-android/airlight-android.component'
import { AirLightComponent } from './air-light/air-light.component'

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'en', component: LandingComponent },
  { path: 'de', component: LandingComponent },
  { path: 'sl', component: LandingComponent },
  { path: 'home', component: LandingComponent },
  { path: 'products/vxone', component: VxoneSComponent },
  { path: 'products/mobile-units', component: MobileUnitComponent },
  { path: 'products/vxone-air', component: VxoneAirComponent },
  { path: 'products/lamps', component: LampsComponent },
  { path: 'products/x35w', component: X35wLampComponent },
  { path: 'products/xl36w', component: Xl36wLampComponent },
  { path: 'products/xxl55w', component: Xxl55wLampComponent },
  { path: 'products/xl70w', component: Xl70wLampComponent },
  { path: 'products/c110w', component: C110wLampComponent },
  { path: 'products/airlight', component: AirLightComponent },
  { path: 'stories', component: BlogPostsComponent },
  { path: 'stories/:slug', component: PostComponent },
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes),
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
