import { Component } from '@angular/core';
import { NaviationServiceService } from './service/naviation-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-table';

  constructor(
    private naviationServiceService: NaviationServiceService
  ){}

  ngOnInit(): void {
    this.naviationServiceService.disableBrowserBackButton();
  }
}
