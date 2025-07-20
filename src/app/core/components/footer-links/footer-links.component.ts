import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-footer-links',
   standalone: true,
  imports: [MatIcon, MatIconButton],
  templateUrl: './footer-links.component.html',
  styleUrl: './footer-links.component.scss',
})
export class FooterLinksComponent {
  navigateToCorrectLink(type:| 'sourceCode'): void {
    const urls = {
    };

    window.open( '_blank');
  }
}
