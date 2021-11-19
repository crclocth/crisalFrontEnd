import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LaboratoryProviderService } from 'src/app/core/providers/laboratory/laboratory-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.less'],
})
export class DeleteModalComponent implements OnInit {
  public laboratory: any;

  constructor(
    public activeModal: NgbActiveModal,
    private laboratoryProviderService: LaboratoryProviderService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    console.log(this.laboratory);
  }

  async delete() {
    try {
      await this.laboratoryProviderService.deleteLaboratoryById(
        this.laboratory._id
      );
      this.notificationService.success('Se Eliminó el Laboratorio');
      this.activeModal.close('info modal');
    } catch (error) {
      this.notificationService.error('Error al Eliminar el Laboratorio');
    }
  }
}
