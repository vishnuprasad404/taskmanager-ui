import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedTheme: string = 'dark'


  ngOnInit(): void {
    this.getApplicationTheme();
  }

  getApplicationTheme(): void {
    const currentTheme: string | null = sessionStorage.getItem('theme');
    if (currentTheme) {
      const node = document.getElementById('e1DIFimdPf') as HTMLLinkElement;
      if (node) {
        node.href = `${currentTheme}-theme.css`
      }
    }
  }

  setApplicationTheme(): void {
    this.selectedTheme = this.selectedTheme === 'dark' ? 'light' : 'dark';
    sessionStorage.setItem('theme', this.selectedTheme);
    this.getApplicationTheme()
  }

}
