import { Component } from '@angular/core';

import { SafeLinkDirective } from '../safe-link.directive';
import { LogDirective } from '../log.directive';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.html',
  styleUrl: './learning-resources.css',
  standalone: true,
  imports: [SafeLinkDirective, LogDirective],
})
export class LearningResourcesComponent {}
