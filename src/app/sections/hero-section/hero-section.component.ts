import { Component } from '@angular/core';


@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  imports: [],
})
export class HeroSectionComponent {
  isVisible = false;

  ngOnInit() {
    setTimeout(() => {
      this.isVisible = true;
    }, 100); // Delay to ensure render before animation
  }
}
