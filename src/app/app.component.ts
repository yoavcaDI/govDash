import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TablesService } from './tables.service';
import { BarChartComponent } from './bar-chart/bar-chart.component'
import { PieChartComponent } from './pie-chart/pie-chart.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  files: any[] = [];
  sheets: any[] = [];
  inputText: string;

  constructor(public tableService: TablesService, public router: Router) { }
  
  ngOnInit() {
  }
}