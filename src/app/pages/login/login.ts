import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, // Los componentes standalone necesitan importar sus dependencias
  imports: [
    ReactiveFormsModule // Necesario para formularios reactivos
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export default class Login {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      // Define los controles del formulario y sus validaciones
      // Se elimina Validators.email para permitir usuarios como 'admin'
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Lógica de autenticación básica
      if (username === 'admin' && password === 'admin') {
        console.log('Login exitoso. Redirigiendo a /layout...');
        this.router.navigate(['/layout']); // Redirige a la ruta /layout
      } else {
        console.log('Credenciales incorrectas.');
        // Aquí podrías mostrar un mensaje de error en la UI
      }
    } else {
      console.log('El formulario no es válido');
    }
  }
}
