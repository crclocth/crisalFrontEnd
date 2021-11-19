import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppointCompanyProviderService } from 'src/app/core/providers/appointCompany/appoint-company-provider.service';
import { AppointmentProviderService } from 'src/app/core/providers/appointment/apointment-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-delete-model-private',
  templateUrl: './delete-model-private.component.html',
  styleUrls: ['./delete-model-private.component.less'],
})
export class DeleteModelPrivateComponent implements OnInit {
  public appPrivate: any;

  constructor(
    public activeModal: NgbActiveModal,
    private appPrivateProviderService: AppointmentProviderService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    console.log(this.appPrivate);
  }

  async delete() {
    try {
      await this.appPrivateProviderService.deleteAppointmentById(
        this.appPrivate._id
      );
      this.notificationService.success('Se Eliminó la Reserva');
      this.activeModal.close('info modal');
    } catch (error) {
      this.notificationService.error('Error al Eliminar la Reserva');
    }
  }
}
