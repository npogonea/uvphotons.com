import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-lamps',
  templateUrl: './lamps.component.html',
  styleUrls: ['./lamps.component.css']
})
export class LampsComponent implements OnInit {

  title = 'UV-C Light Disinfection | UV Germicidal Smart Robot To Kill Germs - UV Photons'

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
