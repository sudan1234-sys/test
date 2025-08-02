import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProjectCarouselComponent } from './project-carousel/project-carousel.component';
import { SkillCardsComponent } from './skill-cards/skill-cards.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
@Component({
  selector: 'app-root',
  imports: [NavbarComponent,HeroSectionComponent, AboutmeComponent,ProjectCarouselComponent, SkillCardsComponent, ExperienceComponent,ContactMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'data-analyst-portfolio';
}
