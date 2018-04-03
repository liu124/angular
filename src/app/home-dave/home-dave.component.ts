import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home-dave',
  templateUrl: './home-dave.component.html',
  styleUrls: ['./home-dave.component.css']
})
export class HomeDaveComponent implements OnInit {
  private HomeDeveId:number;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.HomeDeveId = this.routeInfo.snapshot.params['id'];
  }

}
