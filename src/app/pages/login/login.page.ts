import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle,IonCardHeader, IonButton, IonLabel, IonInput, IonCardContent, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardTitle,IonCardHeader, IonButton, IonLabel, IonInput, IonCardContent, IonItem]
 
})
export class LoginPage implements OnInit {
  password: string = '';
  username: string = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  login() {
    // Perform your authentication logic here
    // This is just a dummy check
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials');
    }
  }
  register() {
    // Add your login logic here
    console.log('Login button clicked');
    this.router.navigateByUrl('/register');
  }
}
