import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { News } from 'src/app/core/models/news.model';
import { NewsProviderService } from 'src/app/core/providers/news/news-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-create-new-screen',
  templateUrl: './create-new-screen.component.html',
  styleUrls: ['./create-new-screen.component.less'],
})
export class CreateNewScreenComponent {
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

  constructor(
    private fb: FormBuilder,
    private newsProviderService: NewsProviderService,
    private notificationService: NotificationService
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

  onSubmit(): void {
    this.notificationService.success('Se creó correctamente la noticia');
    this.addressForm.reset();
  }

  ngOnInit() {
    this.fetchNews();
  }

  async fetchNews() {
    try {
      this.newsArray = await this.newsProviderService.getNews().toPromise();
    } catch (error) {
      console.log('error');
    }
  }

  notInArray(): boolean {
    for (let i = 0; i < this.newsArray.length; i++) {
      console.log(i);
      if (this.title === this.newsArray[i].title) {
        console.log('mismo nombre');
        return false;
      }
    }
    return true;
  }

  public async postNew() {
    let { title, lead, content, date } = this.addressForm.value;
    if (this.notInArray() === true) {
      try {
        this.message2 = 'Se guardaron los datos.';
        await this.newsProviderService
          .postNew({
            title: this.title,
            lead: this.lead,
            content: this.content,
            image: this.imgURL,
          })
          .toPromise();
        this.notificationService.success('Se creó correctamente la noticia');
      } catch (error) {
        this.notificationService.error('Error al Crear la noticia');
      }
    } else {
      this.notificationService.error('Se repite el nombre de la noticia');
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
