import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { TopbarComponent } from './topbar/topbar.component';
import {MaterialModule} from './material';
import { HomeComponent } from './home/home.component';

const routes : Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    TopbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
