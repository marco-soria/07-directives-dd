import { Component, computed, inject } from '@angular/core';
import { NgIf } from '@angular/common';

import { AuthComponent } from './auth/auth';
import { LearningResourcesComponent } from './learning-resources/learning-resources';
import { AuthService } from './auth/auth.service';
import { AuthDirective } from './auth/auth.directive';
import { LogDirective } from './log.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    AuthComponent,
    LearningResourcesComponent,
    NgIf,
    AuthDirective,
    LogDirective,
  ],
})
export class AppComponent {
  private authService = inject(AuthService);

  isAdmin = computed(() => this.authService.activePermission() === 'admin');
}
