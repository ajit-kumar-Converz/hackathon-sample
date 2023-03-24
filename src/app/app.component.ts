import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RestapiService } from './rest-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  plotId: string = 'chart';
  barchart: string = 'barChart';
    data = [{
      values: [3.84, 40.26, 19.49, 8.88,16.33,11.19],
      labels: ['BioEnergy', 'Coal', 'Hydro', 'Nuclear', 'Solar', 'Wind'],
      type: 'pie'
    }];
    cloudData = [{
      y: [1.796,2.513,1.675],
      x: ['Azure', 'GCP', 'AWS'],
      type: 'bar'
    }];
     layout = {
      height: 400,
      width: 500
    };
    config = {
      displaylogo: false
    }
    projectData:any;
    constructor(private restService: RestapiService) {
      this.restService.fetchTableData().subscribe((response) => {
        this.projectData = response;
      })
    }


}
