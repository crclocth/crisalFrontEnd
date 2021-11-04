import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CertificationProviderService } from 'src/app/core/providers/certification/certification-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.less'],
})
export class DeleteModalComponent implements OnInit {
  public certification: any;

  constructor(
    public activeModal: NgbActiveModal,
    private certificationProviderService: CertificationProviderService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  async delete() {
    try {
      await this.certificationProviderService.deleteCertificationById(
        this.certification._id
      );
      this.notificationService.success('Se Eliminó la Certificación');
      this.activeModal.close('info modal');
    } catch (error) {
      this.notificationService.error('Error al Eliminar la Certificación');
    }
  }
}
