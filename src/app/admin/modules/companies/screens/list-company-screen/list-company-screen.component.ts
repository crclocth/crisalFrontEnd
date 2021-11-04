import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-company-screen',
  templateUrl: './list-company-screen.component.html',
  styleUrls: ['./list-company-screen.component.less'],
})
export class ListCompanyScreenComponent implements OnInit {
  ///public companyArray: Company[];
  constructor(/* private companyProviderService: CompanyProviderService */) {
    //this.companyArray = [];
  }

  ngOnInit() {
    //this.fetchCompanies();
  }

  /* addItem(event: any) {
    this.fetchCompanies();
  }

  async fetchCompanies() {
    try {
      this.employeeArray = await this.companyProviderService
        .getCompaies()
        .toPromise();
    } catch (error) {
      console.log('error');
    }
  } */

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
