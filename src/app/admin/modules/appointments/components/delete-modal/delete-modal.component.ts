import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppointCompanyProviderService } from 'src/app/core/providers/appointCompany/appoint-company-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.less'],
})
export class DeleteModalComponent implements OnInit {
  public appCompany: any;

  constructor(
    public activeModal: NgbActiveModal,
    private appCompanyProviderService: AppointCompanyProviderService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    console.log(this.appCompany);
  }

  async delete() {
    try {
      await this.appCompanyProviderService.deleteAppointCompanyById(
        this.appCompany._id
      );
      this.notificationService.success('Se Eliminó la Reserva');
      this.activeModal.close('info modal');
    } catch (error) {
      this.notificationService.error('Error al Eliminar la Reserva');
    }
  }
}
