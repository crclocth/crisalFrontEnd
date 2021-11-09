import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.less'],
})
export class DeleteModalComponent implements OnInit {
  public client: any;

  constructor(
    public activeModal: NgbActiveModal,
    /* private celientProviderService: ClientProviderService, */
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  async delete() {
    /*  try {
      await this.celientProviderService.deleteClientById(this.client._id);
      this.notificationService.success('Se Eliminó el Cliente');
      this.activeModal.close('info modal');
    } catch (error) {
      this.notificationService.error('Error al Eliminar al Cliente');
    } */
  }
}
