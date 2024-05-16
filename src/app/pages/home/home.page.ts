import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardTitle, IonCardHeader, IonLabel, IonInput, IonCardContent, IonItem, IonButtons, IonImg, IonGrid, IonRow, IonCol, AlertController  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonCard, IonCardTitle, IonCardHeader, IonLabel, IonInput, IonCardContent, IonItem, IonButtons, IonImg, IonGrid, IonRow, IonCol]
})
export class HomePage implements OnInit {
  username: string;
  products: { name: string, description: string, image: string }[] = [
    { name: 'Hendley Perfumes', description: 'A sophisticated and unique fragrance that embodies elegance and luxury. Perfect for those who appreciate high-quality scents.', image: 'https://fimgs.net/mdimg/secundar/o.61366.jpg'},
    { name: 'Smell EAU DEAR', description: 'A delightful and refreshing perfume with a hint of floral notes, ideal for everyday wear and special occasions.', image: 'https://1.bp.blogspot.com/-Gg2yS55qXuM/UYhXd3A7k9I/AAAAAAAAAB0/N2cc_dnP9-A/s1600/pink-perfume-bottle.jpg' },
    { name: 'Rose Perfumes', description: 'An enchanting rose fragrance that captures the essence of freshly picked roses, offering a timeless and romantic scent.', image: 'https://th.bing.com/th/id/OIP.PIo76T3cnrd78so7uAPQwwHaF2?rs=1&pid=ImgDetMain' },
    { name: 'Pioson Dior', description: 'A bold and mysterious scent from Dior, combining rich and exotic ingredients to create a truly unforgettable fragrance.', image: 'https://th.bing.com/th/id/OIP.9A1gLkVEc-_bzyLhdHTPHwHaHa?rs=1&pid=ImgDetMain' },
    { name: 'Daisy Marc Jacobs', description: 'A classic fragrance that exudes luxury and sophistication, with a blend of floral and oriental notes for a timeless appeal.', image: 'https://i5.walmartimages.com/asr/b8a1e0f8-7154-4a69-af22-f53b9970f291_3.600ef75af25b4fadb9aca2a6f96454a0.jpeg'},
    { name: 'Shalimar', description: ' Another rendition of the iconic Shalimar, offering a slightly different but equally captivating aroma that stands out.', image: 'https://th.bing.com/th/id/OIP.yf3Lm9gAsHC9ub9huA7Y9QHaHa?rs=1&pid=ImgDetMain' },
    { name: 'Ariana', description: 'A youthful and vibrant fragrance inspired by Ariana Grande, perfect for those who love sweet and playful scents.', image: 'https://i5.walmartimages.com/asr/a67b8cb2-a789-4870-a3d9-36b8d89fa60b_1.4f999b38036e6d413856b4e8c4373323.jpeg' },
    { name: 'SOL Cheirosa 62', description: 'A tropical and sunny fragrance that captures the essence of summer with its warm and inviting notes, perfect for beach lovers.', image: 'https://i.pinimg.com/originals/42/74/60/42746076c2010a7920b25a458cb3ff78.jpg' },
    // Add more products as needed
  ];

  constructor(private router: Router, private alertController: AlertController) {
    // Fetch the username from a service or state management (e.g., store, session storage)
    this.username = ''; // This should be dynamic based on the actual logged-in user
  }

  ngOnInit() {
    // You can fetch products from a service if needed
  }

  logout() {
    // Clear any stored user data and navigate to login page
    this.router.navigate(['/login']);
  }

  async viewProduct(product: { name: string, description: string, image: string }) {
    const alert = await this.alertController.create({
      header: 'Product Details',
      subHeader: product.name,
      message: product.description,
      buttons: ['OK']
    });

    await alert.present();
  }
}