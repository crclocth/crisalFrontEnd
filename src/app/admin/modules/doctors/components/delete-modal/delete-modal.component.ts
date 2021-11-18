import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DoctorProviderService } from 'src/app/core/providers/doctor/doctor-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.less'],
})
export class DeleteModalComponent implements OnInit {
  public doctor: any;

  constructor(
    public activeModal: NgbActiveModal,
    private doctorProviderService: DoctorProviderService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    console.log(this.doctor);
  }

  async delete() {
    try {
      await this.doctorProviderService.deleteDoctorById(this.doctor._id);
      this.notificationService.success('Se Eliminó el Doctor');
      this.activeModal.close('info modal');
    } catch (error) {
      this.notificationService.error('Error al Eliminar El Doctor');
    }
  }
}
