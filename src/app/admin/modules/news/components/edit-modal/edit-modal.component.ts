import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { News } from 'src/app/core/models/news.model';
import { NewsProviderService } from 'src/app/core/providers/news/news-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.less'],
})
export class EditModalComponent implements OnInit {
  public addressForm: FormGroup;
  public maxInputTitle: number;
  public maxInputLead: number;
  public maxInputContent: number;
  public selected!: Date | null;
  public message2: string;
  public message: string;
  public imagePath = '';
  public imgURL: any;
  public newsArray: News[];
  public op: boolean;
  public news: any;
  public information!: News;

  constructor(
    private fb: FormBuilder,
    private newsProviderService: NewsProviderService,
    private notificationService: NotificationService,
    public activeModal: NgbActiveModal,
    private newProviderService: NewsProviderService
  ) {
    this.maxInputTitle = 60;
    this.maxInputLead = 60;
    this.maxInputContent = 500;
    this.message2 = '';
    this.message = '';
    this.newsArray = [];
    this.op = false;
    this.addressForm = this.fb.group({
      title: [null, [Validators.required]],
      lead: ['', [Validators.required]],
      content: [null, [Validators.required]],
      date: ['', [Validators.required]],
    });
  }

  get title() {
    return this.addressForm.get('title')?.value;
  }
  get lead() {
    return this.addressForm.get('lead')?.value;
  }
  get content() {
    return this.addressForm.get('content')?.value;
  }
  get date() {
    return this.addressForm.get('date')?.value;
  }

  onSubmit(): void {
    this.addressForm.reset();
  }

  ngOnInit() {
    console.log(this.news);
  }

  /* notInArray(): boolean {
    for (let i = 0; i < this.newsArray.length; i++) {
      console.log(i);
      if (this.title === this.newsArray[i].title) {
        console.log('mismo nombre');
        return false;
      }
    }
    return true;
  } */

  public async edit() {
    let { title, lead, content, date } = this.addressForm.value;
    console.log(title, lead, content, date);
    try {
      this.message = 'Se guardaron los datos.';
      this.information = {
        title: this.title,
        lead: this.lead,
        date: this.date,
        content: this.content,
        image: this.imgURL,
      };
      this.newProviderService.patchNew(this.news._id, this.information);
      this.notificationService.success('Se editó la noticia');
      this.activeModal.close('info modal');
    } catch (error) {
      this.notificationService.error('Error al Editar la noticia');
    }
  }

  preview(files: any) {
    if (files.length === 0) return;
    let mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message2 = 'Only images are supported.';
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
