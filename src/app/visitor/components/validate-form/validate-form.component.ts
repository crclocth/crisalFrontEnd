import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { rutTools } from 'prettyutils';
import { PdfMakeWrapper, Txt, Table, Img, Columns, QR } from 'pdfmake-wrapper';
import { DatePipe } from '@angular/common';
import { CertificateProviderService } from 'src/app/core/providers/certificate/certificate-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';
import { Certificate } from 'src/app/core/models/certificate.model';

@Component({
  selector: 'app-validate-form',
  templateUrl: './validate-form.component.html',
  styleUrls: ['./validate-form.component.less'],
})
export class ValidateFormComponent {
  public addressForm: FormGroup;
  public certificateArray: Certificate[];
  public certificateSelected!: Certificate;

  constructor(
    private fb: FormBuilder,
    private certificateProviderService: CertificateProviderService,
    private notificationService: NotificationService
  ) {
    this.certificateArray = [];
    this.addressForm = this.fb.group({
      rut: [
        null,
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(10),
          Validators.pattern('[0-9]{1,2}[0-9]{3}[0-9]{3}-[0-9Kk]{1}'),
        ],
      ],
      code: ['', [Validators.required]],
    });
  }

  get rut() {
    return this.addressForm.get('rut')?.value.trim();
  }
  get code() {
    return this.addressForm.get('code')?.value.trim();
  }

  public validateRut() {
    let rut = this.rut;
    let result = rutTools.validate(rut);
    console.log(result, this.addressForm.valid);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }

  ngOnInit() {
    this.fetchCertificates();
  }

  async fetchCertificates() {
    try {
      this.certificateArray = await this.certificateProviderService
        .getCertificates()
        .toPromise();
    } catch (error) {
      console.log('error');
    }
  }

  async getCertificate() {
    try {
      this.certificateSelected = await this.certificateProviderService
        .getCertificateById(this.code)
        .toPromise();
      if (
        this.certificateSelected.examinee.rut === this.rut &&
        this.certificateSelected._id === this.code
      ) {
        this.openModalSee(this.certificateSelected);
      } else {
        this.notificationService.error('El Código o RUT son Incorrectos');
      }
    } catch (error) {
      this.notificationService.error('El Código o RUT son Incorrectos');
      console.log('error');
    }
  }

  async openModalSee(certificate: Certificate) {
    const datePipe = new DatePipe('en-US');
    const pdf = new PdfMakeWrapper();
    pdf.pageSize('A4');
    pdf.info({
      title: 'CERTIFICADO DIGITAL DE EVALUACIÓN LABORAL',
      author: 'CRISAL Salud Laboral',
    });
    pdf.images({
      logoCrisal: await new Img('/assets/image/logoHD.png').build(),
    });
    pdf.add(
      await new Img('logoCrisal', true)
        .alignment('center')
        .fit([220, 80])
        .build()
    );
    pdf.add(pdf.ln(1));
    pdf.add(
      new Txt('CERTIFICADO DIGITAL DE EVALUACIÓN LABORAL')
        .bold()
        .alignment('center')
        .fontSize(8).end
    );
    pdf.add(pdf.ln(1));
    pdf.add(new Txt(certificate.title).alignment('center').fontSize(8).end);
    pdf.add(pdf.ln(1));
    pdf.add(new Txt('Datos del Trabajador:').bold().fontSize(8).end);
    pdf.add(pdf.ln(1));
    pdf.add(
      new Table([
        [
          'Emitido con Fecha:',
          datePipe.transform(certificate.date, 'dd-MM-YYYY'),
        ],
        ['RUT:', certificate.examinee.rut],
        ['Nombre', certificate.examinee.name],
      ])
        .fontSize(8)
        .layout('noBorders')
        .widths('*').end
    );
    pdf.add(pdf.ln(1));
    pdf.add(new Txt('Datos de la Empresa:').bold().fontSize(8).end);
    pdf.add(pdf.ln(1));
    pdf.add(
      new Table([
        ['Nombre de la Empresa: ', certificate.company.name],
        ['RUT de la Empresa:', certificate.company.rut],
        ['Cargo:', certificate.examinee.jobTitle],
        ['Faena:', certificate.company.faena],
        [
          'Vigencia Informe Medico:',
          datePipe.transform(certificate.validityDate, 'dd-MM-YYYY'),
        ],
      ])
        .fontSize(8)
        .layout('noBorders')
        .widths('*').end
    );
    pdf.add(pdf.ln(1));
    pdf.add(
      new QR(this.formatQR(certificate)).fit(150).alignment('center').end
    );
    pdf.add(pdf.ln(2));
    pdf.add(
      new Txt(
        'La adulteración o falsificación de este Certificado y el uso de uno falso, es un delito penado por la Ley, según lo dispuesto en los articulos 193,197 y 198 del Código Penal.'
      )
        .alignment('center')
        .fontSize(8).end
    );
    pdf.add(pdf.ln(1));
    pdf.add(
      new Txt(
        'CRISAL SALUD LABORAL, está autorizado por el S.S. de Viña del Mar, mediante resolución N° 1503 del 09 de agosto de 2017, de Viña del Mar, y resolución 914 del 18 de mayo del 2015, de Viña del Mar.'
      )
        .alignment('center')
        .fontSize(8).end
    );

    pdf.create().open();
  }

  formatQR(certificate: Certificate) {
    const datePipe = new DatePipe('en-US');
    let cadena =
      'CERTIFICADO DIGITAL DE EVALUACION LABORAL: ' +
      certificate.title +
      '\n\nEmitido con Fecha: ' +
      datePipe.transform(certificate.date, 'dd-MM-YYYY') +
      '\n\nDatos del Trabajador: ' +
      '\nNombre: ' +
      certificate.examinee.name +
      '\nRUT: ' +
      certificate.examinee.rut +
      '\n\nDatos de la Empresa: ' +
      '\nNombre de la Empresa: ' +
      certificate.company.name +
      '\nRUT de la Empresa: ' +
      certificate.company.rut +
      '\nCargo: ' +
      certificate.examinee.jobTitle +
      '\nFaena: ' +
      certificate.company.faena +
      '\n\nVigencia Informe Medico: ' +
      datePipe.transform(certificate.validityDate, 'dd-MM-YYYY');
    return cadena;
  }
}
