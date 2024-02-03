import { Component } from '@angular/core';

@Component({
  selector: 'app-head-section',
  templateUrl: './head-section.component.html',
  styleUrls: ['./head-section.component.scss']
})
export class HeadSectionComponent {
  scrollToSection() {
    let contactSection = document.getElementById('contact');
    if(contactSection) {
      contactSection.scrollIntoView({behavior: 'smooth'});
    }
  }
}
