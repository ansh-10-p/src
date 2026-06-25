import { Component, Directive, Input } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-routebox',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule, MatIconModule, MatInputModule, MatFormFieldModule],
  templateUrl: './routebox.component.html',
  styleUrl: './routebox.component.css'
})
export class RouteboxComponent {
  @Input()
  routes: {
    icon: string,
    location: string,
    cases: number,
    durationTime: string,
    employeeId: number,
    employeeName: string
  }

}
