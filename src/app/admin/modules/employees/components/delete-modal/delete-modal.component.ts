import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeProviderService } from 'src/app/core/providers/employee/employee-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.less'],
})
export class DeleteModalComponent implements OnInit {
  public employee: any;

  constructor(
    public activeModal: NgbActiveModal,
    private employeeProviderService: EmployeeProviderService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    console.log(this.employee);
  }

  async delete() {
    try {
      await this.employeeProviderService.deleteEmployeeById(this.employee._id);
      this.notificationService.success('Se Eliminó el Empleado');
      this.activeModal.close('info modal');
    } catch (error) {
      this.notificationService.error('Error al Eliminar el Empleado');
    }
  }
}
