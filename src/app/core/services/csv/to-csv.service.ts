import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToCsvService {

  constructor() { }

  convertToCSV(objArray) {
    const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str = '';

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < array.length; i++) {
      let line = '';
      // tslint:disable-next-line: forin
      for (const index in array[i]) {

        if (line !== '') { line += ','; }
        line += array[i][index];
      }
      str += line + '\r\n';
    }

    return str;
  }

  exportCSVFile(headers: any, items: any, fileName: string) {
    if (headers) {
     items.unshift(headers);
    }
    const jsonObject = JSON.stringify(items);
    const csv = this.convertToCSV(jsonObject);
    const exportName = fileName + '.csv' || 'export.csv';
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) {
     navigator.msSaveBlob(blob, exportName);
    } else {
     const link = document.createElement('a');
     if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', exportName);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
     }
    }
   }

}
