import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.less'],
})
export class DeleteModalComponent implements OnInit {
  public company: any;

  constructor(
    public activeModal: NgbActiveModal,
    // private newProviderService: NewsProviderService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    console.log(this.company);
  }

  async delete() {
    /* try {
      await this.newProviderService.deleteCompanyById(this.company._id);
      this.notificationService.success('Se Eliminó la Empresa');
      this.activeModal.close('info modal');
    } catch (error) {
      this.notificationService.error('Error al Eliminar la Empresa');
    } */
  }
}