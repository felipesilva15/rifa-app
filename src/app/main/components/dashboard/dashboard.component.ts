import { Component } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import { DashboardData } from '../../api/dashboard-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  isLoading: boolean = true;
  data!: DashboardData;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.dashboardService.getDataHome().subscribe({
      next: (res: DashboardData) => {
        this.data = res;
        this.isLoading = false;
      }
    });
  }
}
