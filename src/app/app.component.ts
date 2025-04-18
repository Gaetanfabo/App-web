import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    HeaderComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent { 
  title = 'IVAN_FABO_INC';
}

 