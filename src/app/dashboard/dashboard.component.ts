import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {

  constructor (private router: Router,
    private route: ActivatedRoute,
  private authService: AuthService){

    }

  irHome():void{
    this.router.navigate(["home"], {relativeTo: this.route})
  }

  irPregunta02():void{
    this.router.navigate(["pregunta02"], {relativeTo: this.route})
  }

  irPregunta03():void{
    this.router.navigate(["pregunta03"], {relativeTo: this.route})
  }

  irPregunta04():void{
    this.router.navigate(["pregunta04"], {relativeTo: this.route})
  }


  cerrarsesion():void{
    this.authService.exit();
    this.router.navigateByUrl("/login")
  }
}