import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Certification } from 'src/app/core/models/certification.model';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.less'],
})
export class CertificationsComponent implements OnInit {
  @Input() certification!: Certification;
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
