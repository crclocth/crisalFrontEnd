import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserProviderService } from 'src/app/core/providers/user/user-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.less'],
})
export class DeleteModalComponent implements OnInit {
  public user: any;

  constructor(
    public activeModal: NgbActiveModal,
    private userProviderService: UserProviderService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    console.log(this.user);
  }

  async delete() {
    try {
      await this.userProviderService.deleteUserById(this.user._id);
      this.notificationService.success('Se Eliminó el Usuario');
      this.activeModal.close('info modal');
    } catch (error) {
      this.notificationService.error('Error al Eliminar el Usuario');
    }
  }
}
