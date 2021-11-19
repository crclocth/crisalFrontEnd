import { Component, HostListener, OnInit } from '@angular/core';
import { Certificate } from 'src/app/core/models/certificate.model';
import { CertificateProviderService } from 'src/app/core/providers/certificate/certificate-provider.service';

@Component({
  selector: 'app-list-certificates-screen',
  templateUrl: './list-certificates-screen.component.html',
  styleUrls: ['./list-certificates-screen.component.less'],
})
export class ListCertificatesScreenComponent implements OnInit {
  public certificatesArray: Certificate[];

  constructor(private certificateProviderService: CertificateProviderService) {
    this.certificatesArray = [];
  }
  ngOnInit() {
    this.fetchCertificates();
  }

  addItem(event: any) {
    this.fetchCertificates();
  }

  async fetchCertificates() {
    try {
      this.certificatesArray = await this.certificateProviderService
        .getCertificates()
        .toPromise();
      this.certificatesArray = this.certificatesArray.reverse();
    } catch (error) {
      console.log('error');
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
