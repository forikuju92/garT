import { Component } from '@angular/core';
import { HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GAR Technical Limited';

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Get the navbar
const navbar: HTMLElement = document.getElementById('nLinks');

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

if (window.pageYOffset > sticky) {
    navbar.classList.add('stickyNav');
  } else {
    navbar.classList.remove('stickyNav');
  }
  // name = 'Angular';
  }
}

