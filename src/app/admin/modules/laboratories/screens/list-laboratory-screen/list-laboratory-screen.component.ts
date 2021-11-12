import { Component, HostListener, OnInit } from '@angular/core';
import { Laboratory } from 'src/app/core/models/laboratory.model';
import { LaboratoryProviderService } from 'src/app/core/providers/laboratory/laboratory-provider.service';

@Component({
  selector: 'app-list-laboratory-screen',
  templateUrl: './list-laboratory-screen.component.html',
  styleUrls: ['./list-laboratory-screen.component.less'],
})
export class ListLaboratoryScreenComponent implements OnInit {
  public laboratoryArray: Laboratory[];
  constructor(private laboratoryProviderService: LaboratoryProviderService) {
    this.laboratoryArray = [];
  }

  ngOnInit() {
    this.fetchLaboratories();
  }

  addItem(event: any) {
    this.fetchLaboratories();
  }

  async fetchLaboratories() {
    try {
      this.laboratoryArray = await this.laboratoryProviderService
        .getLaboratorys()
        .toPromise();
    } catch (error) {
      console.log('error');
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
