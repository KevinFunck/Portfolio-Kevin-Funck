import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutMeComponent } from 'src/about-me/about-me.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadSectionComponent } from 'src/head-section/head-section.component';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { GithubEmailComponent } from 'src/github-email/github-email.component';
import { MySkillsComponent } from 'src/my-skills/my-skills.component';
import { PortfolioComponent } from 'src/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HeadSectionComponent,
    NavbarComponent,
    GithubEmailComponent,
    MySkillsComponent,
    PortfolioComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
