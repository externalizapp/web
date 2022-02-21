import { Component, OnInit } from '@angular/core';
import { faFileSignature, faEuroSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  faFileSignature = faFileSignature;
  faEuroSign = faEuroSign;

  constructor() { }

  ngOnInit(): void {
  }

}
