import { Component, HostListener, OnInit, SimpleChanges } from '@angular/core';
import { Certification } from 'src/app/core/models/certification.model';
import { CertificationProviderService } from 'src/app/core/providers/certification/certification-provider.service';

@Component({
  selector: 'app-list-certification-screen',
  templateUrl: './list-certification-screen.component.html',
  styleUrls: ['./list-certification-screen.component.less'],
})
export class ListCertificationScreenComponent implements OnInit {
  public certificationArray: Certification[];
  constructor(
    private certificationProviderService: CertificationProviderService
  ) {
    this.certificationArray = [];
  }

  ngOnInit() {
    this.fetchCertifications();
  }

  addItem(event: any) {
    this.fetchCertifications();
  }

  async fetchCertifications() {
    try {
      this.certificationArray = await this.certificationProviderService
        .getCertifications()
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
