import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  CompId:any=localStorage.getItem("xxxx");
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  scrollTop(){
    window.scrollTo(0,0);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
    this.scrollTop();
  }

  //0
  getStandardPermission(){
    return true
  }



}
