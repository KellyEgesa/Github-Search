import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayProfileComponent } from './display-profile/display-profile.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { DisplayRepositoriesComponent } from './display-repositories/display-repositories.component';
import { DatePassedPipe } from './date-passed.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [AppComponent, DisplayProfileComponent, FormComponent, RepositoriesComponent, DisplayRepositoriesComponent, DatePassedPipe, HighlightDirective],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
