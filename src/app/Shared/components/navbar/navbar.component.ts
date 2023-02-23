import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRequestService } from 'src/app/Core/http/api-request.service';
import { PermissionsService } from '../../services/permissions/permissions.service';
import { Subject, takeWhile } from 'rxjs';
import * as moment from 'moment';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  allAnnounce:any;

  showDropdown:boolean=false;

  alive:boolean=true;
  linksData =
  [
    {name:"HR", children:[{permissionStatus:0,name:"Personnel",route:"",isDropDown:true,children:[{name:"Leave Request", route:"/HR/leaveRequest",isDropDown:false,permission:0},{name:"Attendance",route:"/HR/teamAttendence",isDropDown:false,permission:2},{name:"Create New User",route:"/HR/addNewEmployee",isDropDown:false,permission:2},{name:"Master Data",route:"/HR/masterData",isDropDown:false,permission:2}]},{permissionStatus:0,name:"OD",route:"",isDropDown:true,permission:0,children:[{name:"Job Description",route:"/HR/jobDescription",isDropDown:false,permission:0}]},{permissionStatus:0,name:"Vote For The Best",route:"/HR/vote",isDropDown:false}], dropDownStyle:""},
    {name:"IT", children:[{permissionStatus:0,name:"New User Network", route:"/IT/userNetwork",isDropDown:false},{permissionStatus:0,name:"New Ticket", route:"/IT/newTicket",isDropDown:false},{permissionStatus:5,name:"Reset Password", route:"/IT/resetPassword",isDropDown:false},], dropDownStyle:""},
    {name:"Purchasing", children:[{permissionStatus:0,name:"Add Action", route:"/purchasing/userNetwork",isDropDown:false}], dropDownStyle:""},
    {name:"Admin", children:[{permissionStatus:0,name:"Add Action", route:"/admin/userNetwork",isDropDown:false}], dropDownStyle:""},
    {name:"Planning", children:[{permissionStatus:0,name:"Add Action", route:"/planning/userNetwork",isDropDown:false}], dropDownStyle:""},
    {name:"QA", children:[{permissionStatus:0,name:"Add Action", route:"/QA/userNetwork",isDropDown:false}], dropDownStyle:""},
    {name:"QC", children:[{permissionStatus:0,name:"Add Action", route:"/QC/userNetwork",isDropDown:false}], dropDownStyle:""},
    {name:"Mentainance", children:[{permissionStatus:0,name:"Add Action", route:"/mentainance/userNetwork",isDropDown:false}], dropDownStyle:""},
    {name:"Production", children:[{permissionStatus:0,name:"Add Action", route:"/production/userNetwork",isDropDown:false}], dropDownStyle:""},
    {name:"Finance", children:[{permissionStatus:0,name:"Add Action", route:"/finance/userNetwork",isDropDown:false}], dropDownStyle:""},
    {name:"HSE", children:[{permissionStatus:0,name:"Add Action", route:"/HSE/userNetwork",isDropDown:false}], dropDownStyle:""},
    {name:"Warehouse", children:[{permissionStatus:0,name:"Add Action", route:"/warehouse/userNetwork",isDropDown:false}], dropDownStyle:""},
    {name:"Security", children:[{permissionStatus:0,name:"Add Action", route:"/security/userNetwork",isDropDown:false}], dropDownStyle:"left:-3rem"},
    {name:"CCTV", children:[{permissionStatus:0,name:"Add Action", route:"/security/userNetwork",isDropDown:false}], dropDownStyle:"left:-3rem"},
    {name:"WMS", children:[{permissionStatus:0,name:"Add Action", route:"/security/userNetwork",isDropDown:false}], dropDownStyle:"left:-3rem"},
  ]
  userName:any = localStorage.getItem("userName");
  userCode = localStorage.getItem("userCode");
  // userImg = localStorage.getItem("userImg")
  userJobTitle = localStorage.getItem("userJobTitle");
  jobTitleID:any;
  jobTitleName:any;
  empCode:any;

  isPDP:boolean=false;

  isHome:boolean=true;

  allComps:any;
  compId:any;
  // hide:boolean = false
  userObj:any=localStorage.getItem("userObj");
  dept = JSON.parse(this.userObj).deptName;
  level = JSON.parse(this.userObj).level;
  hrCode = JSON.parse(this.userObj).userCode;
  posName=JSON.parse(this.userObj).posName;
  companyId=JSON.parse(this.userObj).companyId;
  dateOfLogin=JSON.parse(this.userObj).dateOfLogin;

  CompId:any=localStorage.getItem("CompId");

  isLoading: Subject<boolean> = this.loading.isLoading;

  userImg:any;


  constructor(public loading:LoadingService,public router:Router,public permissionService:PermissionsService,public apiService:ApiRequestService) {
    console.log(this.router.url);

    this.router.events.subscribe((val:any)=>{
      this.router.url.includes('PDP')? this.isPDP=true:this.isPDP=false;
      this.router.url.includes('home')? this.isHome=true:this.isHome=false;

  })
  }

  ngOnInit(): void {
    this.getAllAnnouncements(this.compId?this.compId:this.companyId);
    this.getAllCompanies();
    this.getUserBySubCode();

    //  if(this.hrCode !='120755'){
    //    this.deleteLocalStorage();
    //  }


  }




  deleteLocalStorage(){
    if(!this.dateOfLogin){
      localStorage.clear();
    }

    if(this.dateOfLogin){
      let today = moment().format('yyyy-MM-DD');
      let now = moment().toDate().getDate();
      console.log(today,now);

      let date = this.dateOfLogin.split('T')[0];

      if(date !=today){
        localStorage.clear();
      }
    }
  }









}
