import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { rutTools } from 'prettyutils';
import { NewsProviderService } from 'src/app/core/providers/news/news-provider.service';

@Component({
  selector: 'app-create-new-screen',
  templateUrl: './create-new-screen.component.html',
  styleUrls: ['./create-new-screen.component.less'],
})
export class CreateNewScreenComponent {
  public hasUnitNumber: boolean;
  public addressForm: FormGroup;
  public maxInputTitle: number;
  public maxInputLead: number;
  public maxInputContent: number;
  public selected!: Date | null;
  public mensaje: string;
  public message: string;
  public imagePath = '';
  imgURL: any;

  constructor(
    private fb: FormBuilder,
    private newsProviderService: NewsProviderService
  ) {
    this.maxInputTitle = 60;
    this.maxInputLead = 60;
    this.maxInputContent = 500;
    this.hasUnitNumber = false;
    this.mensaje = '';
    this.message = '';
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

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }

  onSubmit(): void {
    alert('Thanks!');
  }

  public async postNew() {
    let { title, lead, content, date } = this.addressForm.value;
    console.log(title, lead, content, date);
    try {
      this.mensaje = 'Se guardaron los datos.';
      await this.newsProviderService
        .postNew({
          title: this.title,
          lead: this.lead,
          date: this.date,
          content: this.content,
          image: this.imgURL,
        })
        .toPromise();
    } catch (error) {
      alert('Error al añadir el registro');
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
}
