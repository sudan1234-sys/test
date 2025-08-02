import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-project-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.scss'],
})
export class ProjectCarouselComponent implements OnInit {
 ngOnInit(): void {
    AOS.init({ duration: 800, once: true });
  }

  projects = [
    {
      title: 'Sales Dashboard',
      description: 'Power BI dashboard analyzing sales performance.',
      image: 'assets/projects/sales.jpg',
    },
    {
      title: 'Customer Churn Model',
      description: 'Logistic regression model for churn prediction.',
      image: 'assets/projects/churn.jpg',
    },
    {
      title: 'SQL Data Pipeline',
      description: 'End-to-end ETL pipeline using SQL and Python.',
      image: 'assets/projects/sql.jpg',
    },
   
  ];

  
  }

