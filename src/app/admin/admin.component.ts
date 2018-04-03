import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private adminId:number;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
      // this.adminId = this.routeInfo.snapshot.queryParams['id'];
    /*快照   url传参*/
     /*this.adminId = this.routeInfo.snapshot.params['id'];*/
     /*订阅*/
     this.routeInfo.params.subscribe((params:Params) => this.adminId = params['id']);
  }

}
