import { Component, HostListener, OnInit, ViewChild, AfterViewInit,EventEmitter, Input, Output } from '@angular/core';
import { Certificate } from 'src/app/core/models/certificate.model';
import { CertificateProviderService } from 'src/app/core/providers/certificate/certificate-provider.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { PdfMakeWrapper, Txt, Table, Img, Columns, QR } from 'pdfmake-wrapper';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from '../../components/delete-modal/delete-modal.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-list-certificates-screen',
  templateUrl: './list-certificates-screen.component.html',
  styleUrls: ['./list-certificates-screen.component.less'],
})
export class ListCertificatesScreenComponent implements OnInit{

  public certificatesArray: Certificate[]=[];
  displayedColumns: string[] = ['company', 'title', 'examinee', '_id', 'date', 'action'];
  dataSource = new MatTableDataSource<Certificate>(this.certificatesArray);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(private certificateProviderService: CertificateProviderService,
              private _liveAnnouncer: LiveAnnouncer,
              private modalService: NgbModal,
              private dialog: MatDialog) {
    this.certificatesArray = [];
  }

  async ngOnInit() {
    this.certificatesArray = await this.fetchCertificates() as Certificate[];
    console.log(this.certificatesArray);
    this.dataSource = new MatTableDataSource<Certificate>(this.certificatesArray);
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch(property) {
        case 'company': return item.company.name;
        case 'title': return item.title;
        case 'examinee': return item.examinee.lastNames;
        case 'date': return Date.parse(item.date.toString());
        default: return property;
      }
    };
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (item, filter) => {
      return item.company.name.indexOf(filter) != -1 ||
      item.title.indexOf(filter) != -1 ||
      item.examinee.rut.indexOf(filter) != -1 ||
      item.examinee.names.indexOf(filter) != -1  ||
      item.date.toString().indexOf(filter) != -1 ;
    }

  }

  addItem(event: any) {
    this.fetchCertificates();
  }

  async fetchCertificates(): Promise<Certificate[]> {
    let array: Certificate[] = [];
    try {
      array = await this.certificateProviderService
        .getCertificates()
        .toPromise();
      //this.certificatesArray = this.certificatesArray.reverse();
    } catch (error) {
      console.log('error');
    }
    return array.reverse();
  }

  filtrar(event: Event) {
    const filtro = (event?.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toUpperCase();
  }


  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  openModalDelete(certificate: Certificate) {
    const modalRef = this.modalService.open(DeleteModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.certificate = certificate;
    modalRef.result.then((result) => {
      console.log(result);
      this.newItemEvent.emit(result);
    });
  }

  /* openModalEdit() {
     const modalRef = this.modalService.open(EditModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.certificate = this.certificate;
    modalRef.result.then((result) => {
      console.log(result);
      this.newItemEvent.emit(result);
    });

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
  } */

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
      new Table([
        [
          'CERTIFICADO N° ' +
            datePipe.transform(certificate.date, 'YYYY') +
            '/' +
            certificate.serialCode,
          'CERTIFICADO DIGITAL DE EVALUACIÓN LABORAL',
          'Fecha de Exámen: ' +
            datePipe.transform(certificate.date, 'dd-MM-YYYY'),
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
      new Txt(certificate.title).alignment('center').fontSize(8).end
    );
    pdf.add(pdf.ln(1));
    pdf.add(
      new Table([
        [
          'Nombres:',
          certificate.examinee.names + ' ' + certificate.examinee.lastNames,
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
      new Table([['Exámen', 'Laboratorio', 'Resultado', 'Unidad', 'Estado']])
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
        ['CONCLUSIONES MÉDICAS:', certificate.conclusion],
        ['INDICACIONES:', certificate.suggestions],
        [
          'VIGENCIA INFORME MÉDICO:',
          this.createValidity(certificate, datePipe),
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
      certificate.examinee.names + ' ' + certificate.examinee.lastNames +
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
      return datePipe.transform(certificate.validityDate, 'dd-MM-YYYY');
    }
    return certificate.validity;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}


