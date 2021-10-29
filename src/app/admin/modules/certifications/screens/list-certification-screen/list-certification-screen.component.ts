import { Component, HostListener, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Certification } from 'src/app/core/models/certification.model';
import { CertificationProviderService } from 'src/app/core/providers/certification/certification-provider.service';

@Component({
  selector: 'app-list-certification-screen',
  templateUrl: './list-certification-screen.component.html',
  styleUrls: ['./list-certification-screen.component.less'],
})
export class ListCertificationScreenComponent implements OnInit {
  public certifications$: Observable<Certification[]>;
  public certificationArray: Certification[];
  constructor(
    private certificationProviderService: CertificationProviderService
  ) {
    this.certifications$ = new Observable<Certification[]>();
    this.certificationArray = [];
  }
  ngOnInit() {
    this.fetchCertifications();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.fetchCertifications();
    console.log('se cambio');
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }

  async fetchCertifications() {
    try {
      this.certifications$ =
        await this.certificationProviderService.getCertifications();
      this.certifications$.subscribe((certification: Certification[]) => {
        this.certificationArray = certification;
      });
    } catch (error) {
      console.log('error');
    }
  }
}
