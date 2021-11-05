import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ExamProviderService } from 'src/app/core/providers/exam/exam-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.less'],
})
export class DeleteModalComponent implements OnInit {
  public exam: any;

  constructor(
    public activeModal: NgbActiveModal,
    private examProviderService: ExamProviderService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    console.log(this.exam);
  }

  async delete() {
    try {
      await this.examProviderService.deleteExamById(this.exam._id);
      this.notificationService.success('Se Eliminó el Exámen');
      this.activeModal.close('info modal');
    } catch (error) {
      this.notificationService.error('Error al Eliminar el Exámen');
    }
  }
}
