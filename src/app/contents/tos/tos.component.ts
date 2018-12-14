import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas'; 


@Component({
	selector: 'app-tos',
	templateUrl: './tos.component.html',
	styleUrls: ['./tos.component.scss']
})
export class TosComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	
	createPDF(){
		let _width = $('.privacy-main').width();
		console.log(_width);

		var doc = new jspdf();
		var specialElementHandlers = {
			'#editor': function (element, renderer) {
				return true;
			}
		};

		doc.fromHTML($('.privacy-main').html(), 15, 15, {
			'width': 170,
			'elementHandlers': specialElementHandlers
		});
		doc.save('sample-file.pdf');
	}

	createPDFInvoice(name){
		console.log(name);
		const fileName = "INV"+name;
		this.generatePDFInvoice(fileName);
	}

	public generatePDFInvoice(fileName) 
	{ 

		let data = document.getElementById('page-A4'); 
		html2canvas(data).then(canvas => { 
			// Few necessary setting options 
			let imgWidth = 208; 
			let pageHeight = 295; 
			let imgHeight = canvas.height * imgWidth / canvas.width; 
			let heightLeft = imgHeight; 

			let _width = canvas.width;
			let _height = canvas.height;

			var width         = canvas.width;
			var height        = canvas.clientHeight;

			const contentDataURL = canvas.toDataURL('image/jpg', 1.0) 
			let pdf = new jspdf('p', 'mm', 'a4');
			pdf.internal.scaleFactor = 30;
			let position = 0; 
			pdf.addImage(contentDataURL, 'JPG', 0, 0, imgWidth, imgHeight) 
			pdf.save(fileName+'.pdf');
		}); 
	} 
}
