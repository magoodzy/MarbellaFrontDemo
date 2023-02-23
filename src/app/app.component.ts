import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Marbella_System';
  hideNavFoot:boolean=false;
  userObj:any=localStorage.getItem("xxx");
  userCode=this.userObj?JSON.parse(this.userObj).xxxx:'--';



  constructor(public router:Router){
    this.router.events.subscribe(val=>{
        this.router.url.includes('login')? this.hideNavFoot=false:this.hideNavFoot=true
    })
  }
  ngOnInit(): void {
   // setInterval(()=>{window.location.reload()},10800000)
  }
}
