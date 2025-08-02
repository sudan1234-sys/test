import { Component } from '@angular/core';
import AOS from 'aos';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
  standalone: true,
  imports: [FormsModule,CommonModule]
})
export class ContactMeComponent {
  submitted = false;

  form = {
    name: '',
    email: '',
    message: ''
  };

  ngOnInit() {
    AOS.init({ once: false });
  }

  onSubmit() {
    if (this.form.name && this.form.email && this.form.message) {
      console.log('Message Sent:', this.form);
      this.submitted = true;
      setTimeout(() => (this.submitted = false), 5000);
      this.form = { name: '', email: '', message: '' };
    }
  }
}
