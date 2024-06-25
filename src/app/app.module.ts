import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreferitiComponent } from './components/preferiti/preferiti.component';
import { PostsComponent } from './components/posts/posts.component';
import { NavbarComponent } from './components/posts/navbar/navbar.component';
import { PostComponent } from './components/posts/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PreferitiComponent,
    PostsComponent,
    NavbarComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
