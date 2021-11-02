import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NewsProviderService } from 'src/app/core/providers/news/news-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.less'],
})
export class DeleteModalComponent implements OnInit {
  public news: any;
  constructor(
    public activeModal: NgbActiveModal,
    private newProviderService: NewsProviderService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    console.log(this.news);
  }

  async delete() {
    try {
      await this.newProviderService.deleteNewById(this.news._id);
      this.notificationService.success('Se eliminó la noticia');
      this.activeModal.close('info modal');
    } catch (error) {
      this.notificationService.error('Error al Eliminar la noticia');
    }
  }
}
