import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Certification } from 'src/app/core/models/certification.model';
import { CertificationProviderService } from 'src/app/core/providers/certification/certification-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.less'],
})
export class EditModalComponent implements OnInit {
  public addressForm: FormGroup;
  public maxInputName: number;
  public imagePath: any;
  public imgURL: any;
  public message: string;
  public message2: string;
  public certification: any;
  public information!: Certification;
  public certificationArray: Certification[];

  constructor(
    private fb: FormBuilder,
    private certificationProviderService: CertificationProviderService,
    private notificationService: NotificationService,
    public activeModal: NgbActiveModal
  ) {
    this.maxInputName = 120;
    this.message = '';
    this.message2 = '';
    this.certificationArray = [];
    this.addressForm = this.fb.group({
      title: [null, [Validators.required]],
    });
  }

  get title() {
    return this.addressForm.get('title')?.value;
  }

  onSubmit(): void {
    this.addressForm.reset();
  }

  ngOnInit() {
    console.log(this.certification);
    this.fetchCertifications();
  }

  async fetchCertifications() {
    try {
      this.certificationArray = await this.certificationProviderService
        .getCertifications()
        .toPromise();
    } catch (error) {
      console.log('error');
    }
  }

  notInArray(): boolean {
    for (let i = 0; i < this.certificationArray.length; i++) {
      console.log(i);
      if (this.title === this.certificationArray[i].title) {
        this.notificationService.error(
          'Se repite el nombre de la certificación'
        );
        return false;
      }
    }
    return true;
  }

  public async edit() {
    if (this.notInArray() === true) {
      let { name } = this.addressForm.value;
      try {
        this.message2 = 'Se guardaron los datos.';
        this.information = {
          title: this.title,
          image: this.imgURL,
        };
        this.certificationProviderService.patchCertification(
          this.certification._id,
          this.information
        );
        this.notificationService.success('Se Editó la Certificación');
        this.activeModal.close('info modal');
        window.location.reload();
      } catch (error) {
        this.notificationService.error('Error al Editar la Certificación');
      }
    } else {
      this.notificationService.error('Se repite el nombre de la Certificación');
    }
  }

  preview(files: any) {
    if (files.length === 0) return;
    let mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }
    let reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      console.log(this.imgURL);
    };
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
