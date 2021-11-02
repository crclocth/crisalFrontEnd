import { Component, HostListener, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NewsProviderService } from 'src/app/core/providers/news/news-provider.service';

@Component({
  selector: 'app-see-modal',
  templateUrl: './see-modal.component.html',
  styleUrls: ['./see-modal.component.less'],
})
export class SeeModalComponent implements OnInit {
  public news: any;
  constructor(
    public activeModal: NgbActiveModal,
    private newProviderService: NewsProviderService
  ) {}

  ngOnInit(): void {
    console.log(this.news);
  }

  async delete() {
    try {
      await this.newProviderService.deleteNewById(this.news._id);
      console.log('funciono');

      alert('se borro');
      this.activeModal.close('info modal');
    } catch (error) {
      console.log('no');
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
