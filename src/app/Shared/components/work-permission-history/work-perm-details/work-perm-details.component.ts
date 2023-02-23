import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-work-perm-details',
  templateUrl: './work-perm-details.component.html',
  styleUrls: ['./work-perm-details.component.scss']
})
export class WorkPermDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
