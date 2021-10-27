import { Component, Input, OnInit } from '@angular/core';
import { Certification } from 'src/app/core/models/certification.model';

@Component({
  selector: 'app-card-certificate',
  templateUrl: './card-certificate.component.html',
  styleUrls: ['./card-certificate.component.less'],
})
export class CardCertificateComponent implements OnInit {
  @Input() certification!: Certification;
  constructor() {}

  ngOnInit(): void {
    console.log(this.certification);
  }
}
