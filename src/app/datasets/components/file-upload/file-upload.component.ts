import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  fileName = '';

  constructor() { }

  ngOnInit() {
  }

  filesSelected(files: FileList) {
    console.log(files[0]);
    this.fileName = files[0].name;
  }
}
