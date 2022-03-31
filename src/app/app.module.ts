import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GoogleTagManagerModule } from 'angular-google-tag-manager';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { BgImgLampsComponent } from './bg-img-lamps/bg-img-lamps.component';
import { C110wLampsComponent } from './c110w-lamps/c110w-lamps.component';
import { C110wLampComponent } from './c110w-lamp/c110w-lamp.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LampsComponent } from './lamps/lamps.component';
import { LandingComponent } from './landing/landing.component';
import { MobileUnitComponent } from './mobile-unit/mobile-unit.component';
import { ModalComponent } from './modal/modal.component';
import { ProductComponent } from './product/product.component';
import { VxoneAirComponent } from './vxone-air/vxone-air.component';
import { VxoneSComponent } from './vxone-s/vxone-s.component';
import { X35wLampComponent } from './x35w-lamp/x35w-lamp.component';
import { Xl36wLampComponent } from './xl36w-lamp/xl36w-lamp.component';
import { Xl70wLampComponent } from './xl70w-lamp/xl70w-lamp.component';
import { Xxl55wLampComponent } from './xxl55w-lamp/xxl55w-lamp.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

import { OrdermodalComponent } from './modal/ordermodal/ordermodal.component'

import { PostComponent } from './blog-posts/post/post.component';
import { AirlightComponent } from './airlight/airlight.component';
import { CertificateComponent } from './airlight/certificate/certificate.component';
import { AirlightAndroidComponent } from './airlight/airlight-android/airlight-android.component';
import { AirlightIosComponent } from './airlight/airlight-ios/airlight-ios.component'
import 'hammerjs';
import { ScullyLibModule } from '@scullyio/ng-lib';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    OrdermodalComponent,
    BlogPostsComponent,
    BgImgLampsComponent,
    C110wLampsComponent,
    C110wLampComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    LampsComponent,
    LandingComponent,
    MobileUnitComponent,
    ModalComponent,
    ProductComponent,
    VxoneAirComponent,
    VxoneSComponent,
    X35wLampComponent,
    Xl36wLampComponent,
    Xl70wLampComponent,
    Xxl55wLampComponent,
    PostComponent,
    AirlightComponent,
    CertificateComponent,
    AirlightAndroidComponent,
    AirlightIosComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    NgxGalleryModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    GoogleTagManagerModule.forRoot({
      id: 'GTM-5KZGTK3',
    }),
    // TranslateModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    ScullyLibModule,
  //   TranslateModule.forRoot({
  //     loader: {
  //         provide: TranslateModule,
  //         useFactory: HttpLoaderFactory,
  //         deps: [HttpClient]
  //     }
  // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }

