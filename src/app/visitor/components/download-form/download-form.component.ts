import { DatePipe } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { rutTools } from 'prettyutils';
import { PdfMakeWrapper, Txt, Table, Img, Columns, QR } from 'pdfmake-wrapper';
import { CertificateProviderService } from 'src/app/core/providers/certificate/certificate-provider.service';
import { Certificate } from 'src/app/core/models/certificate.model';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-download-form',
  templateUrl: './download-form.component.html',
  styleUrls: ['./download-form.component.less'],
})
export class DownloadFormComponent {
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
    return this.addressForm.get('rut')?.value;
  }
  get code() {
    return this.addressForm.get('code')?.value;
  }

  ngOnInit() {
    this.fetchCertificates();
  }

  public validateRut() {
    let rut = this.rut;
    let result = rutTools.validate(rut);
    console.log(result, this.addressForm.valid);
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

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
  onSubmit(): void {}

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
      doctor: await new Img(certificate.doctor.image).build(),
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
    pdf.add(
      new Table([
        [
          'Nombre:',
          certificate.examinee.name,
          'RUT:',
          certificate.examinee.rut,
          'Edad:',
          certificate.examinee.age,
        ],
        [
          'Empresa:',
          certificate.company.name,
          'RUT Empresa:',
          certificate.company.rut,
          '',
          '',
        ],
        [
          'Cargo:',
          certificate.examinee.jobTitle,
          'Faena:',
          certificate.company.faena,
          '',
          '',
        ],
      ])
        .layout('noBorders')
        .widths(['*', 'auto', '*', '*', '*', '*'])
        .fontSize(8).end
    );
    pdf.add(pdf.ln(2));
    pdf.add(new Txt('EXÁMENES DE APOYO CLÍNICO').bold().fontSize(8).end);
    pdf.add(pdf.ln(1));
    pdf.add(
      new Table([
        ['Pulso', 'P.A.', 'Peso (kg)', 'Talla (cm)', 'IMC', '% Sat 02'],
        [
          certificate.physiological.heartRate,
          certificate.physiological.bloodPressure,
          certificate.physiological.weight,
          certificate.physiological.height,
          certificate.physiological.imc.toFixed(1),
          certificate.physiological.sat,
        ],
      ])
        .fontSize(8)
        .widths('*').end
    );
    pdf.add(pdf.ln(1));
    pdf.add(new Txt('EXÁMENES GENERALES').bold().fontSize(8).end);
    pdf.add(pdf.ln(1));
    pdf.add(
      new Table([['Exámen', 'Observación', 'Estado']])
        .fontSize(8)
        .widths('*')
        .bold().end
    );
    for (let exam of certificate.generalResults!) {
      pdf.add(
        new Table([[exam.exam, exam.remark, exam.status]])
          .fontSize(8)
          .layout({
            hLineWidth: function (i, node) {
              return 0.6;
            },
          })
          .widths('*').end
      );
    }
    pdf.add(pdf.ln(1));
    pdf.add(new Txt('EXÁMENES DE LABORATORIO').bold().fontSize(8).end);
    pdf.add(pdf.ln(1));
    pdf.add(
      new Table([['Exámen', 'Laboratorio', 'Unidad', 'Resultado', 'Estado']])
        .fontSize(8)
        .bold()
        .widths('*').end
    );
    for (let exam of certificate.labResults!) {
      pdf.add(
        new Table([
          [
            exam.exam,
            exam.laboratory,
            exam.measurementUnit,
            exam.result,
            exam.status,
          ],
        ])
          .fontSize(8)
          .layout({
            hLineWidth: function (i, node) {
              return 0.6;
            },
          })
          .widths('*').end
      );
    }
    pdf.add(pdf.ln(1));
    pdf.add(new Txt('DATOS FINALES').bold().fontSize(8).end);
    pdf.add(pdf.ln(1));
    pdf.add(
      new Table([
        ['CONCLUSIONES MÉDICAS:', certificate.conclusion],
        ['INDICACIONES:', certificate.suggestions],
        [
          'VIGENCIA INFORME MÉDICO:',
          datePipe.transform(certificate.validityDate, 'dd-MM-YYYY'),
        ],
      ])
        .layout('noBorders')
        .widths('*')
        .fontSize(8).end
    );
    pdf.add(
      new Columns([
        await new Img('doctor', true)
          .fit([350, 450])
          .alignment('center')
          .build(),
        new QR(this.formatQR(certificate)).fit(150).end,
      ]).columnGap(0).end
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
