import { Component } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import { DashboardData } from '../../api/dashboard-data';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  isLoading: boolean = true;
  data!: DashboardData;
  profitChartData!: ChartData;
  profitChartOptions!: any;
  topParticipantsChartData!: ChartData;
  topParticipantsChartOptions!: any;
  documentStyle!: CSSStyleDeclaration;
  textColor!: string;
  surfaceBorder!: string;
  textColorSecondary!: string;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.documentStyle = getComputedStyle(document.documentElement);
    this.textColor = this.documentStyle.getPropertyValue('--text-color');
    this.textColorSecondary = this.documentStyle.getPropertyValue('--text-color-secondary');
    this.surfaceBorder = this.documentStyle.getPropertyValue('--surface-border');

    this.dashboardService.getDataHome().subscribe({
      next: (res: DashboardData) => {
        this.data = res;

        this.initCharts();

        this.isLoading = false;
      }
    });
  }

  initCharts(): void {
    this.initProfitChart();
    this.initTopParticipantsChart();
  }

  initProfitChart(): void {
    this.profitChartData = {
      labels: ['Recebido', 'Pendente'],
      datasets: [
        {
          data: [this.data.summary.receivedProfit, this.data.summary.pendingProfit],
          backgroundColor: [this.documentStyle.getPropertyValue('--green-500'), this.documentStyle.getPropertyValue('--bluegray-700')],
          hoverBackgroundColor: [this.documentStyle.getPropertyValue('--green-400'), this.documentStyle.getPropertyValue('--bluegray-600')],
        }
      ]
    }

    this.profitChartOptions = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: this.textColor
          }
        }
      }
    };
  }

  initTopParticipantsChart(): void {
    this.topParticipantsChartData = {
      labels: this.data.topParticipants.names,
      datasets: [
        {
          label: 'Total de bilhetes',
          data: this.data.topParticipants.ticketsCount,
          backgroundColor: this.documentStyle.getPropertyValue('--blue-400'),
          borderColor: this.documentStyle.getPropertyValue('--blue-500'),
          borderWidth: 1,
        }
      ]
    }

    this.topParticipantsChartOptions = {
      plugins: {
        legend: {
            labels: {
                color: this.textColor
            }
        }
      },
      scales: {
        x: {
          ticks: {
              color: this.textColorSecondary
          },
          grid: {
              color: this.surfaceBorder,
              drawBorder: false
          }
      },
      y: {
          ticks: {
              color: this.textColorSecondary
          },
          grid: {
              color: this.surfaceBorder,
              drawBorder: false
          }
        }
      }
    };
  }
}
