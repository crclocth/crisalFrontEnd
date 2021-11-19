import { Component, HostListener, OnInit } from '@angular/core';
import { Company } from 'src/app/core/models/company.modal';
import { CompanyProviderService } from 'src/app/core/providers/company/company-provider.service';

@Component({
  selector: 'app-list-company-screen',
  templateUrl: './list-company-screen.component.html',
  styleUrls: ['./list-company-screen.component.less'],
})
export class ListCompanyScreenComponent implements OnInit {
  public companyArray: Company[];
  constructor(private companyProviderService: CompanyProviderService) {
    this.companyArray = [];
  }

  ngOnInit() {
    this.fetchCompanies();
  }

  addItem(event: any) {
    this.fetchCompanies();
  }

  async fetchCompanies() {
    try {
      this.companyArray = await this.companyProviderService
        .getCompanies()
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
