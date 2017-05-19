import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) {
  }

  title: string;

  ngOnInit() {
    this.title = '电量不足，充电ing';
    console.log("ngOnInit Success !");
  }

}
