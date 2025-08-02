import { Component } from '@angular/core';
import AOS from 'aos';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
  imports: [CommonModule]
})    

export class ExperienceComponent {
  experiences = [
    {
      role: 'Data Analyst Intern',
      company: 'ABC Corp',
      duration: 'Jan 2024 – May 2024',
      responsibilities: [
        'Built interactive dashboards using Power BI.',
        'Cleaned and analyzed large datasets using Python & SQL.',
        'Delivered actionable insights improving sales performance by 15%.'
      ]
    },
    {
      role: 'Freelance Analyst',
      company: 'Freelancer',
      duration: 'Jun 2023 – Dec 2023',
      responsibilities: [
        'Worked with 5+ clients to provide data analysis solutions.',
        'Automated Excel reports for monthly financial summaries.',
        'Developed customer segmentation using clustering techniques.'
      ]
    }
  ];

  ngOnInit() {
    AOS.init({ once: false });
  }
}
