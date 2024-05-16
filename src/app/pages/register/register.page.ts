import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle,IonCardHeader,IonCardContent, IonRadioGroup, IonListHeader,IonItem, IonLabel, IonRadio, IonButton, IonInput, IonIcon, IonButtons} from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardTitle,IonCardHeader,IonCardContent, IonRadioGroup, IonListHeader,IonItem, IonLabel, IonRadio, IonButton, IonInput, IonIcon, IonButtons ]
})
export class RegisterPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  close() {
    // Add your close logic here, such as navigating back
    this.router.navigate(['/']);  // Navigate to the home or previous page
  }
}
