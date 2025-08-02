import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skill-cards',
  templateUrl: './skill-cards.component.html',
  styleUrls: ['./skill-cards.component.scss'],
  standalone: true,
  imports: [CommonModule] 
})
export class SkillCardsComponent implements OnInit {
  skills = [
    { name: 'Python', icon: 'assets/icons/python.svg' },
    { name: 'SQL', icon: 'assets/icons/sql.svg' },
    { name: 'Power BI', icon: 'assets/icons/powerbi.svg' },
    { name: 'Excel', icon: 'assets/icons/excel.svg' },
    { name: 'Tableau', icon: 'assets/icons/tableau.svg' },
    { name: 'Pandas', icon: 'assets/icons/pandas.svg' },
    { name: 'NumPy', icon: 'assets/icons/numpy.svg' },
    { name: 'Data Cleaning', icon: 'assets/icons/cleaning.svg' }
  ];

  ngOnInit(): void {
    AOS.init();
  }
}
