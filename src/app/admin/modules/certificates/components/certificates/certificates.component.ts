import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Certificate } from 'src/app/core/models/certificate.model';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { PdfMakeWrapper, Txt, Table, Img, Columns, QR } from 'pdfmake-wrapper';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.less'],
})
export class CertificatesComponent implements OnInit {
  @Input() certificate!: Certificate;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(private modalService: NgbModal, private dialog: MatDialog) {}

  ngOnInit() {}

  openModalDelete() {
    const modalRef = this.modalService.open(DeleteModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.certificate = this.certificate;
    modalRef.result.then((result) => {
      console.log(result);
      this.newItemEvent.emit(result);
    });
  }

  openModalEdit() {
    /* const modalRef = this.modalService.open(EditModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.certificate = this.certificate;
    modalRef.result.then((result) => {
      console.log(result);
      this.newItemEvent.emit(result);
    }); */

    this.dialog
      .open(EditModalComponent, {
        //width: '700px',
        autoFocus: false,
        //maxHeight: '90vh',
        data: {
          certificate: this.certificate,
        },
      })
      .afterClosed()
      .subscribe((result) => {
        console.log(result);
        this.newItemEvent.emit(result);
      });
  }

  async openModalSee() {
    const datePipe = new DatePipe('en-US');
    const pdf = new PdfMakeWrapper();
    pdf.pageSize('A4');
    pdf.info({
      title: 'CERTIFICADO DIGITAL DE EVALUACI??N LABORAL',
      author: 'CRISAL Salud Laboral',
    });
    pdf.images({
      logoCrisal: await new Img('/assets/image/logoHD.png').build(),
      doctor: await new Img(this.certificate.doctor.image).build(),
    });
    pdf.add(
      await new Img('logoCrisal', true)
        .alignment('center')
        .fit([220, 80])
        .build()
    );
    pdf.add(pdf.ln(1));
    pdf.add(
      new Table([
        [
          'CERTIFICADO N?? ' +
            datePipe.transform(this.certificate.date, 'YYYY') +
            '/' +
            this.certificate.serialCode,
          'CERTIFICADO DIGITAL DE EVALUACI??N LABORAL',
          'Fecha de Ex??men: ' +
            datePipe.transform(this.certificate.date, 'dd-MM-YYYY'),
        ],
      ])
        .fontSize(8)
        .widths([110, '*', 110])
        .alignment('center')
        .layout('noBorders')
        .bold().end
    );
    pdf.add(pdf.ln(1));
    pdf.add(
      new Txt(this.certificate.title).alignment('center').fontSize(8).end
    );
    pdf.add(pdf.ln(1));
    pdf.add(
      new Table([
        [
          'Nombre:',
          this.certificate.examinee.name,
          'RUT:',
          this.certificate.examinee.rut,
          'Edad:',
          this.certificate.examinee.age,
        ],
        [
          'Empresa:',
          this.certificate.company.name,
          'RUT Empresa:',
          this.certificate.company.rut,
          '',
          '',
        ],
        [
          'Cargo:',
          this.certificate.examinee.jobTitle,
          'Faena:',
          this.certificate.company.faena,
          '',
          '',
        ],
      ])
        .layout('noBorders')
        .widths(['*', 'auto', '*', '*', '*', '*'])
        .fontSize(8).end
    );
    pdf.add(pdf.ln(2));
    pdf.add(new Txt('EX??MENES DE APOYO CL??NICO').bold().fontSize(8).end);
    pdf.add(pdf.ln(1));
    pdf.add(
      new Table([
        ['Pulso', 'P.A.', 'Peso (kg)', 'Talla (cm)', 'IMC', '% Sat 02'],
        [
          this.certificate.physiological.heartRate,
          this.certificate.physiological.bloodPressure,
          this.certificate.physiological.weight,
          this.certificate.physiological.height,
          this.certificate.physiological.imc.toFixed(1),
          this.certificate.physiological.sat,
        ],
      ])
        .fontSize(8)
        .widths('*').end
    );
    pdf.add(pdf.ln(1));
    pdf.add(new Txt('EX??MENES GENERALES').bold().fontSize(8).end);
    pdf.add(pdf.ln(1));
    pdf.add(
      new Table([['Ex??men', 'Observaci??n', 'Estado']])
        .fontSize(8)
        .widths('*')
        .bold().end
    );
    for (let exam of this.certificate.generalResults!) {
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
    pdf.add(new Txt('EX??MENES DE LABORATORIO').bold().fontSize(8).end);
    pdf.add(pdf.ln(1));
    pdf.add(
      new Table([['Ex??men', 'Laboratorio', 'Resultado', 'Unidad', 'Estado']])
        .fontSize(8)
        .bold()
        .widths('*').end
    );
    for (let exam of this.certificate.labResults!) {
      pdf.add(
        new Table([
          [
            exam.exam,
            exam.laboratory,
            exam.result,
            exam.measurementUnit,
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
        ['CONCLUSIONES M??DICAS:', this.certificate.conclusion],
        ['INDICACIONES:', this.certificate.suggestions],
        [
          'VIGENCIA INFORME M??DICO:',
          this.createValidity(this.certificate, datePipe),
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
        new QR(this.formatQR(this.certificate)).fit(150).end,
      ]).columnGap(0).end
    );
    pdf.add(pdf.ln(2));
    pdf.add(
      new Txt(
        'La adulteraci??n o falsificaci??n de este Certificado y el uso de uno falso, es un delito penado por la Ley, seg??n lo dispuesto en los articulos 193,197 y 198 del C??digo Penal.'
      )
        .alignment('center')
        .fontSize(8).end
    );
    pdf.add(pdf.ln(1));
    pdf.add(
      new Txt(
        'CRISAL SALUD LABORAL, est?? autorizado por el S.S. de Vi??a del Mar, mediante resoluci??n N?? 1503 del 09 de agosto de 2017, de Vi??a del Mar, y resoluci??n 914 del 18 de mayo del 2015, de Vi??a del Mar.'
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

  createValidity(certificate: Certificate, datePipe: DatePipe) {
    if (
      certificate.validity === 'Apto' ||
      certificate.validity === 'Aprobado'
    ) {
      return datePipe.transform(this.certificate.validityDate, 'dd-MM-YYYY');
    }
    return certificate.validity;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
