import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export default class Sidebar {

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }

  logout(): void {
    console.log('Cerrando sesión...');
    // En una aplicación real, aquí limpiarías tokens o datos de sesión.
    this.router.navigate(['/login']);
  }
}