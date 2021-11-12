import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.less'],
})
export class DeleteModalComponent implements OnInit {
  public battery: any;

  constructor(
    public activeModal: NgbActiveModal,
    /*  private examProviderService: ExamProviderService, */
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    console.log(this.battery);
  }

  async delete() {
    /* try {
      await this.examProviderService.deleteExamById(this.battery._id);
      this.notificationService.success('Se Eliminó el Exámen');
      this.activeModal.close('info modal');
    } catch (error) {
      this.notificationService.error('Error al Eliminar el Exámen');
    }*/
  }
}
