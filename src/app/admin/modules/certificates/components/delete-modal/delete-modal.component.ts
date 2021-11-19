import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CertificateProviderService } from 'src/app/core/providers/certificate/certificate-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.less'],
})
export class DeleteModalComponent implements OnInit {
  public certificate: any;

  constructor(
    public activeModal: NgbActiveModal,
    private certificateProviderService: CertificateProviderService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  async delete() {
    try {
      await this.certificateProviderService.deleteCertificateById(
        this.certificate._id
      );
      this.notificationService.success('Se Eliminó el Certificado');
      this.activeModal.close('info modal');
    } catch (error) {
      this.notificationService.error('Error al Eliminar el Certificado');
    }
  }
}
