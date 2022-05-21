import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-physics-properties',
  templateUrl: './physics-properties.component.html',
  styleUrls: ['./physics-properties.component.scss']
})
export class PhysicsPropertiesComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Proprietăți Fizice");
  }

}
