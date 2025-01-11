import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Component1Component } from './components/component-1/component-1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,Component1Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mfe1';
}
