import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormSocialComponent } from '../form-social/form-social.post.component';

@NgModule({ // <-- this is a class
  declarations: [AppComponent, FormSocialComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

