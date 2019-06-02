import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  list = {
    title: 'This is the title',
    subtitle: 'This is the subtitle',
    items: [
      'Ionic', 'Angular', 'YouTube', 'Sports'
    ]
  };

  constructor(private router: Router, private dataService: DataService) { }

  openDetailsWithService() {
    this.dataService.setData(42, this.list);
    this.router.navigateByUrl('/details/42');
  }
}