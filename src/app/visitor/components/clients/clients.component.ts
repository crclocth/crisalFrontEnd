import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Certification } from 'src/app/core/models/certification.model';
import { Client } from 'src/app/core/models/client.model';
import { CertificationProviderService } from 'src/app/core/providers/certification/certification-provider.service';
import { ClientProviderService } from 'src/app/core/providers/client/client-provider.service';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less'],
})
export class ClientsComponent implements OnInit {
  public certifications$: Observable<Certification[]>;
  public certificationArray: Certification[];
  public clients$: Observable<Client[]>;
  public clientArray: Client[];
  public breakPoints: any = {
    320: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  };

  constructor(
    private certificationProviderService: CertificationProviderService,
    private clientProviderService: ClientProviderService
  ) {
    this.certifications$ = new Observable<Certification[]>();
    this.certificationArray = [];
    this.clients$ = new Observable<Client[]>();
    this.clientArray = [];
  }

  ngOnChanges(changes: SimpleChanges) {
    this.fetchCertifications();
    this.fetchClients();
    console.log('se cambio');
  }

  async ngOnInit() {
    this.fetchCertifications();
    this.fetchClients();
  }

  async fetchCertifications() {
    try {
      this.certifications$ =
        await this.certificationProviderService.getCertifications();
      this.certifications$.subscribe((client: Certification[]) => {
        this.certificationArray = client;
      });
      /* this.certificationArray = await this.certificationProviderService
        .getCertifications()
        .toPromise(); */
    } catch (error) {
      console.log('error');
    }
  }

  async fetchClients() {
    try {
      this.clients$ = await this.clientProviderService.getClients();
      this.clients$.subscribe((client: Client[]) => {
        this.clientArray = client;
      });
    } catch (error) {
      console.log('error');
    }
  }
}
